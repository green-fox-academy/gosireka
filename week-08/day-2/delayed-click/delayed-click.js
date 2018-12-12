let text = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  setTimeout(() => {
    text.innerText = '2 seconds ellapsed';
  }, 2000);
});
