'use strict';

const xhr = new XMLHttpRequest();
const submit = document.querySelector('#submit-button');
let title = document.querySelector('textarea');
let url = document.querySelector('input');
let form = document.querySelector('form');

const icon = document.querySelector('#icon');
icon.addEventListener('click', ()=>{
  window.location.replace('/');
});

form.addEventListener('submit', () => {
  if(!title.value || !url.value){
    alert('Please give a title and url!');
  } else {
    event.preventDefault();
    const body = {
      'title': title.value,
      'url' : url.value,
      'timestamp': Math.floor(Date.now() / 1000)
    }
    xhr.open('POST', `/posts`);
    xhr.onload = () => {
      if (xhr.status === 200) {
        window.location.replace('/');
      }
    }
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
  }
});
