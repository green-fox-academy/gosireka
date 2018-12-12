let header = document.querySelector('h1');

window.addEventListener('keyup', (event) => {
  console.log(event);
  header.innerText = `Last pressed key code is: ${event.keyCode}`;
});
