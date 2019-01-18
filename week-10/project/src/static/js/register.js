'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let username = document.querySelector('#username');
  checkUsername(username.value);
});

const checkUsername = (username) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/userlist/${username}`);
  xhr.onload = () => {
    if (xhr.status === 200) { 
      addNewUser(username);
    } else {
      window.alert('Username already exists!');
    }
  }
  
  xhr.send();
}

const addNewUser = (username) => {
  let passwords = document.querySelectorAll('.password');
  if(passwords[0].value === passwords[1].value){
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/userlist');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status === 200) { 
        window.location.replace('/');
      }
    }
    let body = {
      username : username,
      password : passwords[0].value
    }
    xhr.send(JSON.stringify(body));
  } else {
    window.alert('Passwords should be the same!');
  }
  
}
