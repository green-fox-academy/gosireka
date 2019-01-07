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
  database: 'quiz',
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const selectRandomQuestion = 'select * from questions order by rand() limit 1;';

app.get('/api/game', (req, res) => {
  conn.query(selectRandomQuestion, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      getAnswerOptions(req, res, data);
    }
  });
});

const selectAnswerOptions = 'select * from answers where question_id=?;';

const getAnswerOptions = (req, res, data) => {
  conn.query(selectAnswerOptions, data[0].id, (err, answersData) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      const questionObj = {
        'id' : data[0].id,
        'question' : data[0].question,
        'answers' : answersData
      }
      res.json(questionObj)
    }
  });
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});