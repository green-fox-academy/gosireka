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

const resetRightBox = () => {
  rightBox.innerHTML = '';
}

const resetLeftBox = () => {
  leftBox.innerHTML = '';
}

const createCharacterList = (response) => {
  let personList = document.createElement('ul');
  response.results.forEach(person => {
    let newPersonItem = document.createElement('li');
    newPersonItem.textContent = person.name;
    personList.appendChild(newPersonItem);
  });
  leftBox.appendChild(personList);
}

const loadFurtherResults = (url) => {
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

let selectedBefore = null;

leftBox.addEventListener('click', () => {
  if (selectedBefore !== null) {
    selectedBefore.setAttribute('style', 'text-decoration: none; color: snow');
  }
  resetRightBox();
  event.target.setAttribute('style', 'text-decoration: underline; color: #FCDF2C');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/people/?search=${event.target.textContent}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      displayMovieNames(response.results[0]);
    }
  }
  xhr.send();
  selectedBefore = event.target;
});

const displayMovieNames = (person) => {
  let newFilmList = document.createElement('ul');
  person.films.forEach(film => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', film);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        let newFilm = document.createElement('li');
        newFilm.textContent = `${response.title} (${response.release_date})`;
        newFilmList.appendChild(newFilm);
      }
    }
    xhr.send();
  });
  rightBox.appendChild(newFilmList);
}

window.addEventListener('scroll', () => {
  handleScroll();
});

const search = document.querySelector('#search-box');
const stickyYPosition = search.offsetTop;

const handleScroll = () => {
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
