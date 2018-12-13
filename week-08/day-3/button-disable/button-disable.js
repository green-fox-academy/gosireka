const favourite = document.querySelector('#favourite');
const facts = document.querySelector('#facts');
let signup = document.querySelector('#signup');
let loveCats = document.querySelector('#love');
const buttons = document.querySelectorAll('button');
let choseGoldfish = false;
let catlover = true;

favourite.addEventListener('change', () => {
  if (event.target.value === 'dog' || event.target.value === 'cat') {
    choseGoldfish = false;
    signup.removeAttribute('disabled');
  } else if (event.target.value === 'goldfish' && !catlover) {
    choseGoldfish = true;
    signup.removeAttribute('disabled');
  } else if (event.target.value === 'goldfish') {
    choseGoldfish = true;
    signup.setAttribute('disabled', 'true');
  }
});

facts.addEventListener('change', () => {
  if (event.target.value === 'no' && choseGoldfish) {
    catlover = false;
    signup.removeAttribute('disabled');
  } else if (event.target.value === 'yes') {
    catlover = true;
    loveCats.removeAttribute('disabled');
  } else if(event.target.value === 'no') {
    catlover = false;
    loveCats.setAttribute('disabled', 'true');
  }
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (!catlover && choseGoldfish) {
      alert('Sigh, we still added you to the cat facts list');
    } else {
      alert('Thank you, you\'ve successfully signed up for cat facts');
    }
  });  
});
