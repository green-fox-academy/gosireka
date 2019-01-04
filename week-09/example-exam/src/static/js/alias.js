'use strict';

const xhr = new XMLHttpRequest();

xhr.open('GET', '/');

let responseList = [];
const container = document.querySelector('#form-container');

xhr.onload = () => {
  if (xhr.status === 200) {
    createForm();
  }
}

const messageContainer = document.querySelector('#msg');
let postResponseList = [];

const createForm = () => {
  const newForm = document.createElement('form');
  createUrlInput(newForm);
  createALiasInput(newForm);
  createSubmitButton(newForm);
  newForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const postReq = new XMLHttpRequest();
    postReq.open('POST', '/api/links');
    postReq.setRequestHeader('Accept', 'application/json');
    postReq.setRequestHeader('Content-Type', 'application/json');
    const aliasInput = document.querySelector('#alias');
    const urlInput = document.querySelector('#URL');
    let postBody = {
      'alias': aliasInput.value,
      'url': urlInput.value
    }
    postReq.onload = () => {
      const newMsg = document.createElement('p');
      newMsg.setAttribute('style', 'text-align: center');
      if (postReq.status === 400) {
        newMsg.innerHTML = 'Your alias is already in use!';
        messageContainer.innerHTML = '';
        newMsg.setAttribute('class', 'red');
        messageContainer.appendChild(newMsg);
      } else if (postReq.status === 200) {
        postResponseList = JSON.parse(postReq.responseText);
        const fourDigitCode = setLength(postResponseList[0].secretCode);
        newMsg.innerHTML = `Your URL is aliased to ${postResponseList[0].alias} and your secret code is ${fourDigitCode}.`;
        messageContainer.innerHTML = '';
        messageContainer.appendChild(newMsg);
        emptyInputFields(aliasInput, urlInput);
      }
    }
    postReq.send(JSON.stringify(postBody));

  });
}

const setLength = (number) => {
  var newNum = number + "";
  while (newNum.length < 4) {
    newNum = "0" + newNum;
  }
  return newNum;
}

const emptyInputFields = (aliasInput, urlInput) => {
  aliasInput.value = '';
  urlInput.value = '';
}

const createUrlInput = (newForm) => {
  const firstLabel = document.createElement('label');
  firstLabel.setAttribute('for', 'URL');
  firstLabel.innerHTML = 'URL';
  newForm.appendChild(firstLabel);
  const urlInput = document.createElement('input');
  urlInput.setAttribute('name', 'URL');
  urlInput.setAttribute('id', 'URL');
  urlInput.setAttribute('type', 'text');
  newForm.appendChild(urlInput);
}

const createALiasInput = (newForm) => {
  const secondLabel = document.createElement('label');
  secondLabel.setAttribute('for', 'alias');
  secondLabel.innerHTML = 'Alias';
  newForm.appendChild(secondLabel);
  const aliasInput = document.createElement('input');
  aliasInput.setAttribute('name', 'alias');
  aliasInput.setAttribute('id', 'alias');
  aliasInput.setAttribute('type', 'text');
  newForm.appendChild(aliasInput);
}

const createSubmitButton = (newForm) => {
  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('class', 'btn');
  newForm.appendChild(submit);
  container.appendChild(newForm);
}

xhr.send();
