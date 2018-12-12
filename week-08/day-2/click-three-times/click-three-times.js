const button = document.querySelector('button');
let counter = 0;
let text = document.querySelector('h1');
let timeOk = false;

setTimeout(() => {
  timeOk = true;
  if (counter >= 3) {
    text.innerText = '5 seconds elapsed and clicked 3 times';
  }
}, 5000);

button.addEventListener('click', () => {
  counter++;
  if (timeOk && counter >= 3) {
    text.innerText = '5 seconds elapsed and clicked 3 times';
  }
});
