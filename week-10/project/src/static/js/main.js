'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let submitButton = document.querySelector('#submit-btn');
  submitButton.setAttribute('disabled', 'true');
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelectorAll('.password');
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/users');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) { 
      const responseList = JSON.parse(xhr.responseText);
      window.location.replace(`/userpage/${responseList[0].id}`);
    } else if( xhr.status === 404){
      window.alert('Wrong username or password!');
    }
  }
  let body = {
    username: usernameInput.value,
    password: passwordInput[0].value
  }
  xhr.send(JSON.stringify(body));
});
