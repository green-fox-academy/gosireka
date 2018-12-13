const showButton = document.querySelector('.see');
let passwordInput = document.querySelector('#password');

showButton.addEventListener('click', () => {
  if (passwordInput.getAttribute('type') === 'password') {
    passwordInput.setAttribute('type', 'text');
  } else {
    passwordInput.setAttribute('type', 'password');
  }
});
