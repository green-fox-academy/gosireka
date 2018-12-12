// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//   - the nav buttons(up, down, left, right) move the background by 10px
//     - the zoom buttons increase / decrease the image by 20 %
//       - attach only two event listeners to the nav element
//         - one for navigation
//           - one for zooming

const buttons = document.querySelector('nav');
let inspector = document.querySelector('.img-inspector');
let backgroundSize = 200;
let xCoord = 0;
let yCoord = 0;

buttons.addEventListener('click', (event) => {
  if (event.target.dataset.direction === 'out' && backgroundSize > 120) {
    backgroundSize *= 0.8;
    inspector.style.backgroundSize = `${backgroundSize}%`;
  } else if (event.target.dataset.direction === 'in') {
    backgroundSize *= 1.2;
    inspector.style.backgroundSize = `${backgroundSize}%`;
  } else if (event.target.dataset.direction === 'down' && yCoord < 100) {
    yCoord += 2;
    inspector.style.backgroundPosition = `${xCoord}% ${yCoord}%`;
  } else if (event.target.dataset.direction === 'up' && yCoord > 0) {
    yCoord -= 2;
    inspector.style.backgroundPosition = `${xCoord}% ${yCoord}%`;
  } else if (event.target.dataset.direction === 'right' && xCoord < 100) {
    xCoord += 2;
    inspector.style.backgroundPosition = `${xCoord}% ${yCoord}%`;
  } else if (event.target.dataset.direction === 'left' && xCoord > 0 ) {
    xCoord -= 2;
    inspector.style.backgroundPosition = `${xCoord}% ${yCoord}%`;
  }
});

