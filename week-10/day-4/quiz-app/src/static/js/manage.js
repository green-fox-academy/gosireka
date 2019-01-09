'use strict';

let manageDiv = document.querySelector('#manage');
let createDiv = document.querySelector('#create');

const displayQuestionList = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/questions');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const responseList = JSON.parse(xhr.responseText);
      responseList.forEach(item => {
        let newQuestionDiv = document.createElement('div');
        newQuestionDiv.setAttribute('class', 'question');
        let newQuestionH3 = document.createElement('h3');
        newQuestionH3.textContent = item.question;
        newQuestionDiv.appendChild(newQuestionH3);
        let newDelete = document.createElement('span');
        newDelete.textContent = 'delete';
        newDelete.setAttribute('class', 'delete');
        newDelete.addEventListener('click', () => {
          sendDeleteReq(item.id);
        });

        newQuestionDiv.appendChild(newDelete);
        manageDiv.appendChild(newQuestionDiv);
      });
    }
  }
  xhr.send();
}

const sendDeleteReq = (id) => {
  const deleteXhr = new XMLHttpRequest();
  deleteXhr.open('DELETE', `/api/questions/${id}`);
  deleteXhr.onload = () => {
    console.log(deleteXhr.status);
    if (deleteXhr.status === 200) {
      window.location.reload();
    }
  }
  deleteXhr.send();
}

displayQuestionList();

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let newQuestionTitleInput = document.querySelector('#question-input');
  let newAnswerInputList = document.querySelectorAll('.input');
  let newRadioInputList = document.querySelectorAll('.radio');
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/questions');
  xhr.setRequestHeader('Accept', 'application/json');
  let body = {
    'question': newQuestionTitleInput.value,
    'answers': [
      {
        'answer': newAnswerInputList[0].value,
        'is_correct': checkIsCorrect(newRadioInputList[0])
      },
      {
        'answer': newAnswerInputList[1].value,
        'is_correct': checkIsCorrect(newRadioInputList[1])
      },
      {
        'answer': newAnswerInputList[2].value,
        'is_correct': checkIsCorrect(newRadioInputList[2])
      },
      {
        'answer': newAnswerInputList[3].value,
        'is_correct': checkIsCorrect(newRadioInputList[3])
      }
    ]
  }
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      window.location.reload();
    }
  }
  xhr.send(JSON.stringify(body));
});

const checkIsCorrect = (radio) => {
  if (radio.checked) {
    return 1;
  }
  return 0;
}

