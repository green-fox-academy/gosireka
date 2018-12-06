// 1)  Fill every paragraph with the last one's content.
// const lastContent = document.querySelector('.animals');
// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(e => {
//   e.textContent = lastContent.textContent;
// });

// 2)  Do the same again, but you should keep the cat strong.
const lastContent = document.querySelector('.animals');
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(e => {
  e.innerHTML= lastContent.innerHTML;
});
