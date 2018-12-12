const body = document.querySelector('body');
let candies = document.querySelector('.candies');
let lollypops = document.querySelector('.lollypops');
let lollypopNumber = lollypops.textContent.length / 2;
let candiesPerSecond = document.querySelector('.speed');
let candyRain = 1;

setInterval(() => {
  if (lollypopNumber >= 4) {
    let candiesRate = Math.floor(lollypopNumber / 4);
    candies.textContent = (parseInt(candies.textContent) + candiesRate * candyRain) ;
    candiesPerSecond.textContent = candiesRate * candyRain ;
  }
}, 1000);

body.addEventListener('click', (event) => {
  switch (event.target.getAttribute('class')) {
    case 'create-candies':
      candies.textContent++;
      break;
    case 'buy-lollypops':
      if (candies.textContent >= 50) {
        candies.textContent -= 50;
        lollypops.textContent += '🍭';
        lollypopNumber++;
      }
      break;
    case 'candy-machine':
      candyRain = 10;
      break;
  }
});
