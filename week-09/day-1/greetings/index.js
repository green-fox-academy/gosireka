const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('home', {
    greet: 'Welcome back',
    name: req.query.name || 'Guest',
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
