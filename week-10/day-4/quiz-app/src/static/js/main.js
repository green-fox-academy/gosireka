'use strict';

const questionBox = document.querySelector('#box');

const displayRandomQuestion = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/game');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response= JSON.parse(xhr.responseText);
      let newQuestion = document.createElement('h2');
      newQuestion.innerHTML = response.question;
      questionBox.appendChild(newQuestion);
      response.answers.forEach(option => {
        let newButton = document.createElement('button');
        newButton.innerHTML = option.answer;
        questionBox.appendChild(newButton);
      });
    }
  }
  xhr.send();
}

displayRandomQuestion();
