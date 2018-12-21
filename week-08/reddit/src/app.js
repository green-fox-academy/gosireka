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
  database: 'reddit',
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'reddit.html'));
});

app.get('/newpost', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/newpost.html'));
});

const getPosts = 'SELECT * FROM post;';

app.get('/posts', (req, res) => {
  conn.query(getPosts, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    }
    else {
      res.json(data);
    }
  });
});

const addNewPost = 'INSERT INTO post (title, url, timestamp, score) VALUES (?, ?, ?, 0)';

app.post('/posts', (req, res) => {
  const newPost = [req.body.title, req.body.url, req.body.timestamp];
  conn.query(addNewPost, newPost, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      res.json(data);
    }
  });
});

const downvotePost = 'UPDATE post SET score = score - 1 WHERE id = ?;';
const upvotePost = 'UPDATE post SET score = score + 1 WHERE id = ?;'
const votedPost = 'SELECT * FROM post WHERE id = ?;';

const sendVoted = (res, selectedId) => {
  conn.query(votedPost, selectedId, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      res.json(data[0]);
    }
  });
}

app.put('/posts/:id/downvote', (req, res) => {
  const selectedId = req.params.id;
  conn.query(downvotePost, selectedId, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    }
    else {
      sendVoted(res, selectedId);
    }
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  const selectedId = req.params.id;
  conn.query(upvotePost, selectedId, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    }
    else {
      sendVoted(res, selectedId);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});