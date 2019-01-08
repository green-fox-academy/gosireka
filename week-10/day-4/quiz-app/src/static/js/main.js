'use strict';

const questionBox = document.querySelector('#box');

let score = document.querySelector('#score');

const displayRandomQuestion = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/game');
  xhr.onload = () => {
    if (xhr.status === 200) {
      questionBox.innerHTML = '';
      const response= JSON.parse(xhr.responseText);
      let newQuestion = document.createElement('h2');
      newQuestion.innerHTML = response.question;
      questionBox.appendChild(newQuestion);
      response.answers.forEach(option => {
        let newButton = document.createElement('button');
        newButton.innerHTML = option.answer;
        newButton.addEventListener('click', () => {
          if (option.is_correct === 1){
            newButton.setAttribute('style', 'background-color: #26AE60');
            let scoreBefore = score.textContent;
            score.textContent = parseInt(scoreBefore) + 1;
          } else {
            newButton.setAttribute('style', 'background-color: #ED8668');
          }
          setTimeout(()=> {
            displayRandomQuestion();
          }, 1500);
          
        });
        questionBox.appendChild(newButton);
      });
    }
  }
  xhr.send();
}



displayRandomQuestion();
