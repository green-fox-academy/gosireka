const body = document.querySelector('body');
const shouldBuy = ['bread', 'milk', 'orange', 'tomato'];

//create ul
const list = document.createElement('ul');
list.setAttribute('id', 'list');
let selectedItemIndex = 0;

//add li elements to ul
shouldBuy.forEach((e, index) => {
  let newItem = document.createElement('li');
  newItem.innerHTML = e;
  newItem.setAttribute('id', e);
  if (index === 0) {
    newItem.setAttribute('style', 'background-color: cornflowerblue');
  }
  list.appendChild(newItem);
});

//add ul to body
body.appendChild(list);

//Create buttons box with buttons id
const buttons = document.createElement('ul');

//create 4 buttons
const up = document.createElement('button');
up.setAttribute('id', 'up');
const move = document.createElement('button');
move.setAttribute('id', 'move');
const remove = document.createElement('button');
remove.setAttribute('id', 'remove');
const down = document.createElement('button');
down.setAttribute('id', 'down');

up.innerHTML = 'Up';
buttons.appendChild(up);

move.innerHTML = '>';
buttons.appendChild(move);

remove.innerHTML = 'X';
buttons.appendChild(remove);

down.innerHTML = 'Down';
buttons.appendChild(down);

//add buttons box to body
body.appendChild(buttons);

//create selectedbox
const selectedBox = document.createElement('ul');

//add selectedBox to body
body.appendChild(selectedBox);

//colors the selected item
const upButton = document.querySelector('#up');
const downButton = document.querySelector('#down');
const moveButton = document.querySelector('#move');
const removeButton = document.querySelector('#remove');

const coloringItem = (shouldColor, removeColor) => {
  shouldColor.setAttribute('style', 'background-color: cornflowerblue');
  removeColor.setAttribute('style', 'background-color: white');
}

upButton.onclick = () => {
  if (selectedItemIndex !== 0 && document.querySelector('#list').querySelectorAll('li').length !== 0) {
    selectedItemIndex--;
    let shouldColor = document.querySelector('#list').childNodes[selectedItemIndex];
    let removeColor = document.querySelector('#list').childNodes[selectedItemIndex + 1];
    coloringItem(shouldColor, removeColor);
  }
}

downButton.onclick = () => {
  if (selectedItemIndex !== document.querySelector('#list').querySelectorAll('li').length - 1 && document.querySelector('#list').querySelectorAll('li').length !== 0) {
    selectedItemIndex++;
    let shouldColor = document.querySelector('#list').childNodes[selectedItemIndex];
    let removeColor = document.querySelector('#list').childNodes[selectedItemIndex - 1];
    coloringItem(shouldColor, removeColor);
  }
}

moveButton.onclick = () => {
  if (document.querySelector('#list').querySelectorAll('li').length >= 1) {
    let newListElement = document.createElement('li');
    newListElement.innerHTML = list.childNodes[selectedItemIndex].textContent;
    selectedBox.appendChild(newListElement);
    list.removeChild(list.childNodes[selectedItemIndex]);
  }
  if (document.querySelector('#list').querySelectorAll('li').length !== 0) {
    list.childNodes[0].setAttribute('style', 'background-color: cornflowerblue');
    selectedItemIndex = 0;
  }
}

removeButton.onclick = () => {
  if (document.querySelector('#list').querySelectorAll('li').length >= 1) {
    list.removeChild(list.childNodes[selectedItemIndex]);
  }
  if (document.querySelector('#list').querySelectorAll('li').length !== 0) {
    list.childNodes[0].setAttribute('style', 'background-color: cornflowerblue');
    selectedItemIndex = 0;
  }
}
