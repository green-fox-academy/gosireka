'use strict';

const xhr = new XMLHttpRequest();

const tableBody = document.querySelector('tbody');

let movieList = [];

xhr.open('GET', '/movies');
xhr.onload = () => {
  if (xhr.status === 200) {
    movieList = JSON.parse(xhr.responseText);
    displayMovies();
  }
}
xhr.send();

const displayMovies = () => {
  tableBody.innerHTML = '';
  movieList.forEach(movie => {
    let newRow = document.createElement('tr');
    let newTitle = document.createElement('td');
    newTitle.innerHTML = movie.title;
    let newGenre = document.createElement('td');
    newGenre.innerHTML = movie.genre;
    let newURL = document.createElement('td');
    newURL.innerHTML = movie.url;
    let newRemove = document.createElement('td');
    newRemove.addEventListener('click', () => {
      deleteMovie(movie);
    });
    newRemove.innerHTML = 'X';
    newRemove.setAttribute('class', 'remove');
    newRow.appendChild(newTitle);
    newRow.appendChild(newGenre);
    newRow.appendChild(newURL);
    newRow.appendChild(newRemove);
    tableBody.appendChild(newRow);
  });
}

const deleteMovie = (movie) => {
  const deleteRequest = new XMLHttpRequest();
  const requestBody = {
    'title': movie.title
  }
  deleteRequest.open('DELETE', '/movies');
  deleteRequest.onload = () => {
    if (deleteRequest.status === 200) {
      movieList = JSON.parse(deleteRequest.responseText);
      displayMovies();
    }
  }
  deleteRequest.setRequestHeader('Accept', 'application/json');
  deleteRequest.setRequestHeader('Content-Type', 'application/json');
  deleteRequest.send(JSON.stringify(requestBody));
}
