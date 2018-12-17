const express = require('express');
const app = express();
const port = 3000;

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    todos: todos,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});