'use strict';

const genreOptions = document.querySelector('#genre');
const titlesContainer = document.querySelector('#title');
const titleOptions = document.querySelectorAll('#title option');
const selectedMovieContainer = document.querySelector('#selected-movie');
const form = document.querySelector('form');
const body = document.querySelector('body');
const addNewTitle = document.querySelector('p');
const displayMovies = document.querySelector('h5');

const moviesReq = new XMLHttpRequest();

moviesReq.open('GET', '/movies');

let movieList = [];

const createMovieList = () => {
  movieList.forEach(movie => {
    let newMovieOption = document.createElement('option');
    newMovieOption.innerHTML = movie.title;
    newMovieOption.setAttribute('class', movie.genre);
    titlesContainer.appendChild(newMovieOption);
  });
}

moviesReq.onload = () => {
  if (moviesReq.status === 200) {
    movieList = JSON.parse(moviesReq.responseText);
    createMovieList();
  }
}
moviesReq.send();

addNewTitle.addEventListener('click', () => {
  window.location.replace('/addtitle');
});

displayMovies.addEventListener('click', () => {
  window.location.replace('/displaymovies');
});

genreOptions.addEventListener('change', () => {
  selectGenre(event.target.value);
});

const selectGenre = (genre) => {
  let moviesAccordingToGenre = movieList.filter(movie => movie.genre === genre);

  titlesContainer.innerHTML = '';
  let selectMovie = document.createElement('option');
  selectMovie.innerHTML = 'Select a movie';
  titlesContainer.appendChild(selectMovie);

  moviesAccordingToGenre.forEach(movie => {
    let newTitle = document.createElement('option');
    newTitle.innerHTML = movie.title;
    titlesContainer.appendChild(newTitle);
  });

  selectMovie.setAttribute('disabled', 'true');
  selectMovie.setAttribute('selected', 'true');
}

titlesContainer.addEventListener('change', () => {
  printTitle(event.target.value);
});

const printTitle = (title) => {
  selectedMovieContainer.innerHTML = '';
  let h1 = document.createElement('h1');
  h1.setAttribute('class', 'selected-title');
  h1.innerText = title;
  selectedMovieContainer.appendChild(h1);
  form.setAttribute('style', 'height: 400px');
  let selected = movieList.filter(movie => movie.title === title);
  body.setAttribute('style', `background-image: url(${selected[0].url})`);
}
