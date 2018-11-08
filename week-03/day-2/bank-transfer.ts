'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance (number) {
  accounts.forEach(function (client) {
    if (client.accountNumber === number) {
      console.log(client.clientName + ', ' + client.balance);
    } 
  })
}

getNameAndBalance(11234543);

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

let fromAccount = 43546731;
let toAccount = 23456311;

function contains (account) {
  if (account.accountNumber === fromAccount || account.accountNumber === toAccount) {
    return account.accountNumber === fromAccount;
  }
}

function transferAmount (arr, fromNum, toNum, amountOfCash) {
  if ( (arr.find(contains)) !== undefined) {

    arr.forEach(function (client) {
      if (client.accountNumber === fromNum) {
        client.balance -= amountOfCash;
      } else if (client.accountNumber === toNum) {
        client.balance += amountOfCash;
      } 
      return client.balance;
    })

  } else {
      console.log('404 - account not found');
    }
}


transferAmount(accounts, fromAccount, toAccount, 500.0);

console.log(accounts);

//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]
