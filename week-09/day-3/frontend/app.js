const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = 8080;

const app = express();

app.use('/assets', express.static('assets'));
app.use(bodyParser());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  if (input) {
    res.send({
      "received": input,
      "result": input * 2
    });
  } else {
    res.send({
      "error": "Please provide an input!"
    });
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (name && title) {
    res.send({
      "welcome_message": `Oh, hi there ${name}, my dear student!`,
    });
  } else {
    res.send({
      "error": "Please provide a name!"
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  let word = req.params.appendable;
  if (word) {
    res.json({
      "appended": word + 'a'
    });
  }
});

app.get('/appenda', (req, res) => {
  res.status(404);
  res.json({
    "error": "no appendable word"
  });
});

const sumUntil = (num) => {
  if (num === 0) {
    return 0;
  } else {
    return (num + sumUntil(num - 1));
  }
}

const factor = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return (num * factor(num - 1));
  }
}

app.post('/dountil/:action', (req, res) => {
  const until = req.body.until;
  const action = req.params.action;
  if (req.body.until) {
    if (action === 'sum') {
      const sumResult = sumUntil(until);
      res.json({
        "result": sumResult
      });
    } else {
      const factorResult = factor(until);
      res.json({
        "result": factorResult
      });
    }
  } else {
    res.json({
      "error": "Please provide a number!"
    })
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
