'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', `/details${window.location.pathname}`);
xhr.onload = () => {
  if (xhr.status === 200) {
    const responseList = JSON.parse(xhr.responseText);
    createBootTable(responseList);
  }
}
xhr.send();

const tableBody = document.querySelector('tbody');

const createBootTable = (bootList) => {
  displayUserName(bootList[0].user_id);
  bootList.forEach(boot => {
    let newRow = document.createElement('tr');
    let newColor = document.createElement('td');
    newColor.textContent = boot.color;
    let newPrice = document.createElement('td');
    newPrice.textContent = boot.price;
    let newLinkData = document.createElement('td');
    let newLink = document.createElement('a');
    newLink.textContent = 'link';
    newLink.setAttribute('href', `${boot.url}`);
    let newDelete = document.createElement('td');
    newDelete.setAttribute('class', 'delete');
    newDelete.textContent = 'X';
    newDelete.addEventListener('click', () => {
      const deleteReq = new XMLHttpRequest();
      deleteReq.open('DELETE', '/boots');
      deleteReq.setRequestHeader('Content-Type', 'application/json');
      deleteReq.onload = () => {
        if (deleteReq.status === 200) {
          window.location.reload();
        }
      }
      let body = {
        boot_id: boot.boot_id
      }
      deleteReq.send(JSON.stringify(body));
    });
    newLinkData.appendChild(newLink);
    newRow.appendChild(newColor);
    newRow.appendChild(newPrice);
    newRow.appendChild(newLinkData);
    newRow.appendChild(newDelete);
    tableBody.appendChild(newRow);
  });
}

const displayUserName = (user_id) => {
  const getUserReq = new XMLHttpRequest();
  getUserReq.open('GET',`/users/${user_id}`);
  getUserReq.onload = () => {
    if (getUserReq.status === 200) {
      const responseList = JSON.parse(getUserReq.responseText);
      let namePlace = document.querySelector('#hello');
      namePlace.innerHTML = `Hello, ${responseList[0].username}`;
    }
  }
  getUserReq.send();
}

const addForm = document.querySelector('form');

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let colorInput = document.querySelector('select');
  let priceInput = document.querySelector('#price');
  let urlInput = document.querySelector('#url');
  const addReq = new XMLHttpRequest();
  addReq.open('POST', '/boots');
  addReq.setRequestHeader('Content-Type', 'application/json');
  addReq.onload = () => {
    if (addReq.status === 200) {
      window.location.reload();
    }
  }
  let pathName = window.location.pathname;
  let body = {
    user_id: pathName.slice(-1),
    color: colorInput.value,
    price: priceInput.value,
    url: urlInput.value
  }
  addReq.send(JSON.stringify(body));
});

const exitButton = document.querySelector('i');

exitButton.addEventListener('click', () => {
  window.location.replace('/');
});
