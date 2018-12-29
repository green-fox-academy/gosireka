'use strict';

const form = document.querySelector('form');
const container = document.querySelector('#container');
const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');

form.addEventListener('submit', (ev) => {

  ev.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/signup');
  const body = {
    'name': nameInput.value,
    'email': emailInput.value
  }
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      container.innerHTML = response;
    }
  }
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(body));
});