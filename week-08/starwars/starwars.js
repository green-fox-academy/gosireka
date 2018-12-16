const BASE_URL = 'https://swapi.co/api';

const button = document.querySelector('button');
const leftBox = document.querySelector('#left-box');
const rightBox = document.querySelector('#right-box');

button.onclick = () => {
  resetRightBox();
  resetLeftBox();
  let searchedName = document.querySelector('input').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/people/?search=${searchedName}`);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      createCharacterList(response);
      if (response.next !== null) {
        loadFurtherResults(response.next);
      }
    }
  }
  xhr.send();
}

function resetLeftBox() {
  leftBox.innerHTML = '';
}

function loadFurtherResults(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      createCharacterList(response);
      if (response.next !== null) {
        loadFurtherResults(response.next);
      }
    }
  }
  xhr.send();
}

function createCharacterList(response) {
  let personList = document.createElement('ul');
  response.results.forEach(person => {
    let personName = person.name;
    let newPersonItem = document.createElement('li');
    newPersonItem.textContent = personName;
    personList.appendChild(newPersonItem);
  });
  leftBox.appendChild(personList);
}


function resetRightBox() {
  rightBox.innerHTML = '';
}

function displayMovieNames(person) {
  let newFilmList = document.createElement('ul');
  person.films.forEach(film => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', film);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        let newFilmTitle = response.title;
        let newDate = response.release_date;
        let newFilm = document.createElement('li');
        newFilm.textContent = `${newFilmTitle} (${newDate})`;
        newFilmList.appendChild(newFilm);
      }
    }
    xhr.send();
  });
  rightBox.appendChild(newFilmList);
}

let selectedBefore = null;

leftBox.addEventListener('click', () => {
  if(selectedBefore !== null){
    selectedBefore.setAttribute('style', 'text-decoration: none; color: snow');
  }
  resetRightBox();
  let chosePersonName = event.target.textContent;
  event.target.setAttribute('style', 'text-decoration: underline; color: #FCDF2C');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/people/?search=${chosePersonName}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      displayMovieNames(response.results[0]);
    }
  }
  xhr.send(); 
  selectedBefore = event.target;
});


window.addEventListener('scroll', ()=>{
  handleScroll();
});

const search = document.querySelector('#search-box');
const stickyYPosition = search.offsetTop;

function handleScroll() {
  if (window.pageYOffset >= stickyYPosition) {
    search.classList.add('sticky');
    search.setAttribute('style', 'background-color: black');
    rightBox.classList.add('sticky-list');
  } else {
    search.classList.remove('sticky');
    search.setAttribute('style', 'background-color: rgba(0, 0, 0, 0.404)');
    rightBox.classList.remove('sticky-list');
  }
}
