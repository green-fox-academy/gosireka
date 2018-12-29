const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.use('/', express.static('./'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/signup', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  res.json(`<h1>Thanks ${name}, we will send updates to ${email}</h1>`)
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
