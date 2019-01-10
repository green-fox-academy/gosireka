'use strict';

const questionBox = document.querySelector('#box');

let score = document.querySelector('#score');

const displayRandomQuestion = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/game');
  xhr.onload = () => {
    if (xhr.status === 200) {
      // fetch('/api/game')
      //   .then( data => {if(data.ok) {
      //     return data.json()}})
      //   .then(response => {
      questionBox.innerHTML = '';
      const response = JSON.parse(xhr.responseText);
      let newQuestion = document.createElement('h2');
      newQuestion.innerHTML = response.question;
      questionBox.appendChild(newQuestion);
      response.answers.forEach(option => {
        let newButton = document.createElement('button');
        newButton.innerHTML = option.answer;
        newButton.addEventListener('click', () => {
          let allButtons = document.querySelectorAll('button');
          allButtons.forEach(button => {
            button.setAttribute('disabled', 'true');
          });
          newButton.setAttribute('style', 'border: 2px inset gray');
          if (option.is_correct === 1) {
            setTimeout(() => {
              newButton.setAttribute('style', 'background-color: #26AE60');
              let scoreBefore = score.textContent;
              score.textContent = parseInt(scoreBefore) + 1;
            }, 1500)
          } else {
            setTimeout(() => {
              newButton.setAttribute('style', 'background-color: #ED8668');
            }, 1500)
          }
          setTimeout(() => {
            displayRandomQuestion();
          }, 3000);
        });
        questionBox.appendChild(newButton);
      });
      // })
      // .catch(error => console.log(error)); 
    }
  }
  xhr.send();
}
displayRandomQuestion();
