'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(number: number): void {
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

function contains(arr: any[], fromNum: number, toNum: number): boolean {
  let containsFromNum: boolean = false;
  let containsToNum: boolean = false;
  arr.forEach(function (client: any): void {
    if (client.accountNumber === fromNum) {
      containsFromNum = true;
    } else if (client.accountNumber === toNum) {
      containsToNum = true;
    }
  })
  return containsFromNum && containsToNum;
}

function transferAmount(arr: any[], fromNum: number, toNum: number, amountOfCash: number): void {
  if (contains(arr, fromNum, toNum)) {
    arr.forEach(function (client: any): void {
      if (client.accountNumber === fromNum) {
        client.balance -= amountOfCash;
      } else if (client.accountNumber === toNum) {
        client.balance += amountOfCash;
      }
    })
  } else {
    console.log('404 - account not found');
  }
}

transferAmount(accounts, 43546731, 23456311, 500.0);

console.log(accounts);

//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]
