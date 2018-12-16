const section = document.querySelector('section');

function generateDivs() {
  for (let i = 1; i < 100; i++) {
    let newDiv = document.createElement('div');
    newDiv.textContent = i + 1;
    section.appendChild(newDiv);
  }
}

generateDivs();

function isPrime(div) {
  if (div.textContent === '1') {
    div.setAttribute('class', 'not-prime');
  } else if (div.textContent === '2') {
    div.setAttribute('class', 'prime');
  } else {
    let number = parseInt(div.textContent);
    for (let i = 2; i < number; i++) {
      if (number % i === 0 && number !== 2) {
        div.setAttribute('class', 'not-prime');
        return;
      } else {
        div.setAttribute('class', 'prime');
      }
    }
  }
}

const divs = document.querySelectorAll('div');

let divIndex = 0;

let timer = setInterval(() => {
  if(divIndex < divs.length){
    isPrime(divs[divIndex]);
    divIndex++;
  } else {
    clearInterval(timer);
  }
}, 100);

