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
  database: 'movieselector',
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/addtitle', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/addtitle.html'));
});

app.get('/displaymovies', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/displaymovies.html'));
});

const addNewMovie = 'INSERT INTO movie (title, genre, url) VALUES(?, ?, ?);'

app.post('/movies', (req, res) => {
  const newMovie = [req.body.title, req.body.genre, req.body.url];

  conn.query(addNewMovie, newMovie, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      res.json(data);
    }
  });
});

const removeMovie = 'DELETE FROM movie WHERE title = ?'

app.delete('/movies', (req, res) => {
  const shouldRemoveTitle = [req.body.title];
  conn.query(removeMovie, shouldRemoveTitle, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      sendAllMovies(res);
    }
  });
});

const sendAllMovies = (res) => {
  conn.query(sendMovies, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    } else {
      res.json(data);
    }
  });
}

const sendMovies = 'SELECT * FROM movie;';

app.get('/movies', (req, res) => {
  sendAllMovies(res);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});