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
  database: 'login',
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/userpage/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'userpage.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
});

const selectBootsByUserId = 'SELECT * FROM boots WHERE user_id = ?';

app.get('/details/userpage/:id', (req, res) => {
  const { id } = req.params;
  if (id) {
    conn.query(selectBootsByUserId, [id], (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      } else {
        res.json(data);
      }
    });
  } else {
    res.status(404).json({
      message: 'there is no user id!'
    });
  }
});

const searchUserId = 'SELECT id FROM users WHERE username = ? AND password = ?;';


app.post('/users', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    conn.query(searchUserId, [username, password], (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      } else {
        if (data.length === 0) {
          res.status(404).json({
            message: 'wrong username or password'
          });
        } else {
          res.json(data);
        }
      }
    });
  } else {
    res.status(404).json({
      message: 'there is no username or password'
    });
  }
});

const addNewUser = 'INSERT INTO users (username, password) VALUES (?, ?);';

app.post('/userlist', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    conn.query(addNewUser, [username, password], (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      } else {
        res.json({
          message : 'insert successfully'
        });
      }
    });
  } else {
    res.status(404).json({
      message: 'there is no username or password'
    });
  }
});

const selectUsername = 'SELECT username FROM users WHERE id = ?;';

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  if (id) {
    conn.query(selectUsername, [id], (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      } else {
        res.json(data);
      }
    });
  } else {
    res.status(404).json({
      message: 'Missing id'
    });
  }
});

const selectUserByName = 'SELECT username FROM users WHERE username = ?;';

app.get('/userlist/:username', (req, res) => {
  const { username } = req.params;
  if (username) {
    conn.query(selectUserByName, [username], (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      } else {
        if (data.length === 0) {
          res.status(200).send();
        } else {
          res.status(400).send();
        }
      }
    });
  } else {
    res.status(404).json({
      message: 'Missing username'
    });
  }
});

const addNewBoot = 'INSERT INTO boots (user_id, color, price, url) VALUES (?, ?, ?, ?);';

app.post('/boots', (req, res) => {
  const { user_id, color, price, url } = req.body;
  if (user_id && color && price && url) {
    conn.query(addNewBoot, [user_id, color, price, url], (err) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      } else {
        res.status(200).send();
      }
    });
  } else {
    res.status(404).json({
      message: 'missing data'
    });
  }
});

const deleteBootById = 'DELETE FROM boots WHERE boot_id = ?;'

app.delete('/boots', (req, res) => {
  const { boot_id } = req.body;
  conn.query(deleteBootById, [boot_id], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

