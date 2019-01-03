'use strict';

const addTitleForm = document.querySelector('#addtitle');
const newTitle = addTitleForm.querySelector('#title-input');
const newGenre = addTitleForm.querySelector('select');
const newURL = addTitleForm.querySelector('#url-input');

addTitleForm.addEventListener('submit', (event)=>{
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  const requestBody = {
    'title': newTitle.value,
    'genre': newGenre.value,
    'url': newURL.value
  }
  xhr.open('POST', '/movies');
  xhr.onload = () => {
    if (xhr.status === 200) {
      window.location.replace('/');
    }
  }
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(requestBody));
});
