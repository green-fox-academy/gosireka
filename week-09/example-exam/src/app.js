'use strict';

const mysql = require('mysql');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.use(express.json());

const conn = mysql.createConnection({
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'url_example',
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const addNewUrl = 'INSERT INTO alias (url, alias, hitcount, secretCode) VALUES (?, ?, 0, ?);';

const checkAlias = 'SELECT alias FROM alias WHERE alias = ?;';

const findByAliasQuery = 'SELECT * FROM alias WHERE alias = ?;';

const generateRandomNum = () => {
  return Math.floor(Math.random() * 10000);
}

app.post('/api/links', (req, res) => {
  checkAliasInTable(req, res);
});

const checkAliasInTable = (req, res) => {
  conn.query(checkAlias, req.body.alias, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      if (data.length > 0) {
        res.status(400).send();
      } else {
        insertIntoTable(req, res);
      }
    }
  });
}

const insertIntoTable = (req, res) => {
  const newSecretCode = generateRandomNum();
  const newUrl = [req.body.url, req.body.alias, newSecretCode];
  conn.query(addNewUrl, newUrl, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      queryByAlias(req, res);
    }
  });
}

const queryByAlias = (req, res) => {
  conn.query(findByAliasQuery, req.body.alias, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      res.json(data);
    }
  });
}

const incrHitCount = 'UPDATE alias SET hitcount = hitcount + 1 WHERE alias = ?;';

app.get('/a/:alias', (req, res) => {
  conn.query(findByAliasQuery, [req.params.alias], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      redirectAndIncr(req, res, data)
    }
  });
});

const redirectAndIncr = (req, res, data) => {
  if (data.length === 0) {
    res.status(404).send();
  } else {
    const redirectUrl = data[0].url;
    conn.query(incrHitCount, [req.params.alias], (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
        return;
      } else {
        res.redirect(`https://${redirectUrl}`);
      }
    });
  }
}

const getLinks = 'SELECT id, url, alias, hitcount FROM alias;';

app.get('/api/links', (req, res) => {
  conn.query(getLinks, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      res.json(data);
    }
  });
});

const removeLink = 'DELETE FROM alias WHERE id = ?;';
const checkId = 'SELECT * FROM alias WHERE id = ?;';
const checkSecretCode = 'SELECT * FROM alias WHERE id = ? AND secretCode = ?';

app.delete('/api/links/:id', (req, res) => {
  conn.query(checkId, req.params.id, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      checkIdInTable(req, res, data);
    }
  });
});

const checkIdInTable = (req, res, data) => {
  if (data.length === 0) {
    res.status(404).send();
  } else {
    checkCodeInTable(req, res);
  }
}

const checkCodeInTable = (req, res) => {
  conn.query(checkSecretCode, [req.params.id, req.body.secretCode], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      removeLinkFromTable(req, res, data);
    }
  });
}

const removeLinkFromTable = (req, res, data) => {
  if (data.length === 0) {
    res.status(403).send();
  } else {
    conn.query(removeLink, req.params.id, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
        return;
      } else {
        res.status(204).send();
      }
    });
  }
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
