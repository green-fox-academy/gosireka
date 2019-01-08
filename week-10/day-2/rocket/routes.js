'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

const conn = mysql.createConnection({
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'rocket',
});

const getList = 'SELECT * FROM ammos;';

app.get('/rocket', (req, res) => {
  conn.query(getList, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      let responseObj = {
        caliber25: data[0].caliber25,
        caliber30: data[0].caliber30,
        caliber50: data[0].caliber50,
        shipstatus: checkShipStatus(data[0].shipstatus),
        ready: checkReady(data[0].ready)
      }
      res.status(200).json(responseObj);
    }
  });
});

const checkShipStatus = (shipstatus) => {
  if (shipstatus === 0) {
    return 'empty';
  } else if (shipstatus === 100) {
    return 'full';
  }
  return `${shipstatus}%`;
}

const checkReady = (ready) => {
  if (ready === 0) {
    return false;
  }
  return true;
}

const getAll = 'SELECT * FROM ammos;';

app.get('/rocket/fill', (req, res) => {
  const { caliber, amount } = req.query;
  if (caliber && amount) {
    conn.query(getAll, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      } else {
        if (data[0].shipstatus === 'full') {
          res.json({
            message: 'the ship is full!'
          });
        } else {
          addAmmo(caliber, amount, res);
        }
      }
    });
  } else {
    res.status(210).json({
      error: 'no query'
    });
  }
});

const updateReady = 'UPDATE ammos SET ready = 1;';

const setReadyToTrue = (res, caliber, amount, percentage, shipInfo) => {
  conn.query(updateReady, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      conn.query(getAll, (err, data) => {
        if (err) {
          console.log(err.message);
          res.status(500).send();
        } else {
          res.status(200).json({
            received: caliber,
            amount: amount,
            shipstatus: 'full',
            ready: checkReady(data[0].ready)
          });
        }
      });
    }
  });
}

const getAmmoAmount = 'SELECT caliber25, caliber30, caliber50 FROM ammos;';

const addAmmo = (caliber, amount, res) => {
  conn.query(getAmmoAmount, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      const ammoAmount = data[0].caliber25 + data[0].caliber30 + data[0].caliber50;
      const freeCapacity = 12500 - ammoAmount;
      if (amount <= freeCapacity) {
        updateAmountInDatabase(caliber, amount, res);
      } else {
        updateAmountInDatabase(caliber, freeCapacity, res);
      }
    }
  });
}

const updateAmountCaliber50 = 'UPDATE ammos SET caliber50 = caliber50 + ?;';
const updateAmountCaliber30 = 'UPDATE ammos SET caliber30 = caliber30 + ?;';
const updateAmountCaliber25 = 'UPDATE ammos SET caliber25 = caliber25 + ?;';

const updateAmountInDatabase = (caliber, amount, res) => {
  let actualCaliber = caliber * 100;
  if (actualCaliber === 50) {
    conn.query(updateAmountCaliber50, [amount], (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      } else {
        getUpdatedStatus(actualCaliber, amount, res);
      }
    });
  } else if (actualCaliber === 30) {
    conn.query(updateAmountCaliber30, [amount], (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      } else {
        getUpdatedStatus(actualCaliber, amount, res);
      }
    });
  } else if (actualCaliber === 25) {
    conn.query(updateAmountCaliber25, [amount], (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      } else {
        getUpdatedStatus(actualCaliber, amount, res);
      }
    });
  }
}

const getUpdatedStatus = (caliber, amount, res) => {
  conn.query(getList, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      updateShipStatus(caliber, amount, data[0], res);
    }
  });
}

const updatePercentage = 'UPDATE ammos SET shipstatus = ?;';

const updateShipStatus = (caliber, amount, shipInfo, res) => {
  let allAmmo = shipInfo.caliber25 + shipInfo.caliber30 + shipInfo.caliber50;
  let percentage = allAmmo * 100 / 12500;
  conn.query(updatePercentage, [percentage], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else if(percentage === 100){
      setReadyToTrue(res, caliber, amount, percentage, shipInfo);
    } else {
      res.status(200).json({
        received: caliber,
        amount: amount,
        shipstatus: `${percentage}%`,
        ready: checkReady(shipInfo.ready)
      });
    }
  });
}

module.exports = app;
