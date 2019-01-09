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

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, 'manage.html'));
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
        'id': data[0].id,
        'question': data[0].question,
        'answers': answersData
      }
      res.json(questionObj)
    }
  });
}

const selectQuestions = 'SELECT * FROM questions;';

app.get('/api/questions', (req, res) => {
  conn.query(selectQuestions, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      res.json(data);
    }
  });
});

const addNewQuestion = 'INSERT INTO questions (question) VALUES (?);';

app.post('/api/questions', (req, res) => {
  const { question, answers } = req.body;
  conn.query(addNewQuestion, question, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      selectQuestionId(question, answers, res);
    }
  });
});

const selectNewQuestionId = 'SELECT id FROM questions WHERE question = ?;';

const selectQuestionId = (question, answers, res) => {
  conn.query(selectNewQuestionId, [question], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      answers.forEach(answer => {
        addNewAnswers(data[0].id, answer, res);
      });
    }
  });
}

const insertNewAnswers = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?);';

const addNewAnswers = (questionId, answer, res) => {
  conn.query(insertNewAnswers, [questionId, answer.answer, answer.is_correct], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
}

const deleteByIdFromQuestions = 'DELETE FROM questions WHERE id = ?;';

app.delete('/api/questions/:id', (req, res) => {
  const { id } = req.params;
  conn.query(deleteByIdFromQuestions, [id], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      deleteAnswers(id, res);
    }
  });
});

const deleteByIdFromAnswers = 'DELETE FROM answers WHERE question_id = ?;';

const deleteAnswers = (id, res) => {
  conn.query(deleteByIdFromAnswers, [id], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
