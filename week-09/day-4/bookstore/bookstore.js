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
const getBooksByCategory = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ((book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id) INNER JOIN category ON book_mast.cate_id = category.cate_id) INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id WHERE category.cate_descrip = ?;';
const getBooksByPublisher = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ((book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id) INNER JOIN category ON book_mast.cate_id = category.cate_id) INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id WHERE publisher.pub_name = ?;';
const getBooksByCategoryAndPublisher = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ((book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id) INNER JOIN category ON book_mast.cate_id = category.cate_id) INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id WHERE category.cate_descrip = ? && publisher.pub_name = ?;';
const getBooksByPrice = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ((book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id) INNER JOIN category ON book_mast.cate_id = category.cate_id) INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id WHERE book_price >= ? AND book_price <= ?;';

app.get('/books', (req, res) => {

  const category = req.query.category;
  const publisher = req.query.publisher;
  const priceMin = req.query.priceMin;
  const priceMax = req.query.priceMax;
  const price = [priceMin, priceMax];
  const catAndPub = [category, publisher];

  if (category && !publisher && !priceMin) {
    conn.query(getBooksByCategory, category, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      }
      else {
        res.json(data);
      }
    });
  } else if (!category && publisher && !priceMin) {
    conn.query(getBooksByPublisher, publisher, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      }
      else {
        res.json(data);
      }
    });
  } else if (publisher && category && !priceMin) {
    conn.query(getBooksByCategoryAndPublisher, catAndPub, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      }
      else {
        res.json(data);
      }
    });
  } else if (priceMin && !category && !publisher) {
    conn.query(getBooksByPrice, price, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      }
      else {
        res.json(data);
      }
    });
  } else {
    conn.query(getAllBooks, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      }
      else {
        res.json(data);
      }
    });
  }

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
