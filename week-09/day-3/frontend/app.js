const express = require('express');
const path = require('path');

const port = 8080;

const app = express();

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  if(input){
    res.send({
      "received": input,
      "result" : input * 2
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
  if(name && title){
    res.send({
      "welcome_message": `Oh, hi there ${name}, my dear student!`,
    });
  } else {
    res.send({
      "error": "Please provide a name!"
    });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
