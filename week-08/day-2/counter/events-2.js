const button = document.querySelector('button');
const list = document.querySelector('ul');
let result = document.querySelector('.result');

button.addEventListener('click', () => { 
  result.textContent = list.childElementCount;
});
