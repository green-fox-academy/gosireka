// 1) replace the list items' content with items from this list:
//   ['apple', 'banana', 'cat', 'dog']
const newList = ['apple', 'banana', 'cat', 'dog'];
const listItems = document.querySelectorAll('li');
listItems.forEach((e, index) => {
  e.textContent = newList[index];
});

// 2) change the <ul> element's background color to 'limegreen'
//   - use css class to change the color instead of the style property
const shouldGreenList = document.querySelector('ul');
shouldGreenList.classList.add('limegreen');
