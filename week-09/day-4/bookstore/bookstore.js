'use strict';

const mysql = require('mysql');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'));

const conn = mysql.createConnection({
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'bookinfo',
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const getAllBooks = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ((book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id) INNER JOIN category ON book_mast.cate_id = category.cate_id) INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;';

app.get('/books', (req, res) => {

  conn.query(getAllBooks, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
      return;
    }
    res.json(data);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
