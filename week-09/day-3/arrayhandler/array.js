const express = require('express');
const path = require('path');

const port = 8080;

const app = express();

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const sum = (numArray) => {
  let sum = 0;
  numArray.forEach(e => {
    sum += e;
  });
  return sum;
}

const multiply = (numArray) => {
  let multiply = 1;
  numArray.forEach(e => {
    multiply *= e;
  });
  return multiply;
}

const double = (numArray) => {
  let doubledArray = [];
  numArray.forEach(e => {
    doubledArray.push(e * 2);
  });
  return doubledArray;
}

app.post('/arrays', (req, res) => {
  const what = req.body.what;
  const numArray = req.body.numbers;
  if (what && numArray) {
    if (what === "sum") {
      res.json({
        "result": sum(numArray)
      });
    } else if (what === "multiply") {
      res.json({
        "result": multiply(numArray)
      });
    } else {
      res.json({
        "result": double(numArray)
      });
    }
  } else {
    res.json({
      "error": "Please provide what to do with the numbers!"
    });
  }

});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});