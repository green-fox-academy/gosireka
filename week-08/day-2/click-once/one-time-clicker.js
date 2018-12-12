const button = document.querySelector('button');
let counter = 0;

//first solution
// button.addEventListener('click', (event) => {
//   if (counter === 0) {
//     console.log(event.timeStamp);
//   }
//   counter++;
// });

//second solution
button.addEventListener('click', (event) => {
  console.log(event.timeStamp);
  button.setAttribute('disabled', true);
});
