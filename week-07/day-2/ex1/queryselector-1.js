//       1. store the element that says 'The King' in the 'king' variable.
//       console.log it.
const king = document.querySelector('#b325');
console.log(king.innerHTML);

//       2. store 'The Businessman' and 'The Lamplighter'
//       in the 'businessLamp' variable.
//       console.log each of them.
const businessLamp = document.querySelectorAll('.asteroid.big');
businessLamp.forEach(e => {
  console.log(e.innerHTML);
});

//       3. store 'The King' and 'The Conceited Man'
//       in the 'conceitedKing' variable.
//       alert them one by one.
const container = document.querySelector('.container');
const conceitedKing = container.querySelectorAll('.asteroid');
conceitedKing.forEach(e => {
  alert(e.innerHTML);
});

//       4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//       in the 'noBusiness' variable.
//       console.log each of them.
const noBusiness = document.querySelectorAll('div');
noBusiness.forEach(e => {
  console.log(e.innerHTML);
});
