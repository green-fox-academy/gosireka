const container = document.querySelector('#container');
const scrollThreshold = 200;

getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const createTenBox = () => {
  for (let i = 0; i < 10; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'box');
    newDiv.setAttribute('style', `background-color: ${getRandomColor()}`)
    container.appendChild(newDiv);
  }
}

createTenBox();

window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= container.clientHeight - scrollThreshold) {
    createTenBox();
  }
});
