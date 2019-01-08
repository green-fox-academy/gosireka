'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  const { distance, time } = req.query;
  if (distance && time && time > 0) {
    const calculatedSpeed = distance / time;
    res.status(200).json({
      distance : distance,
      time : time,
      speed : calculatedSpeed
    });
  } else if(time <= 0){
    res.status(210).json({
      error : 'wrong time query'
    });
  } else {
    res.status(210).json({
      error : 'no query'
    });
  }
});

module.exports = app;
