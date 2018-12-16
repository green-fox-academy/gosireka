
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//   - the timer should fire every 100ms
//     - the timer should stop when there are no more elements left to be colored

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
    clearTimeout(timer);
  }
}, 100);

