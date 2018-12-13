let genreOptions = document.querySelector('#genre');
let titles = document.querySelector('#title');
let titleOptions = titles.querySelectorAll('option');
let selectedMovieContainer = document.querySelector('#selected-movie');
let form = document.querySelector('form');
let body = document.querySelector('body');

function selectGenre(genre) {
  titles.innerHTML = '';
  titleOptions.forEach(title => {
    if (title.getAttribute('class') === genre) {
      titles.appendChild(title);
    }
  });
}

genreOptions.addEventListener('change', () => {
  selectGenre(event.target.value);
});

function printTitle(title) {
  selectedMovieContainer.innerHTML = '';
  let h1 = document.createElement('h1');
  h1.setAttribute('class', 'selected-title');
  h1.innerText = title;
  selectedMovieContainer.appendChild(h1);
  form.setAttribute('style', 'height: 350px');
  switch (title) {
    case 'Deadpool':
      body.setAttribute('style', 'background-image: url(https://images7.alphacoders.com/901/901925.jpg)');
      break;
    case 'Moon':
      body.setAttribute('style', 'background-image: url(moon.png)');
      break;
    case '2001 Space odessy':
      body.setAttribute('style', 'background-image: url(space.jpg)');
      break;
    case 'Contact':
      body.setAttribute('style', 'background-image: url(contact.jpg)');
      break;
    case 'Darkest hour':
      body.setAttribute('style', 'background-image: url(darkest.jpg)');
      break;
    case 'There will be blood':
      body.setAttribute('style', 'background-image: url(https://images4.alphacoders.com/514/thumb-1920-51484.jpg)');
      break;
    case 'American beauty':
      body.setAttribute('style', 'background-image: url(https://nofilmschool.com/sites/default/files/styles/facebook/public/american-beauty-cover.jpg?itok=20JJMRVq)');
      break;
    case 'Airplane!':
      body.setAttribute('style', 'background-image: url(https://belfastfilmfestival.org/assets/uploads/2018/07/Airplane-1400x788.jpg)');
      break;
    case 'Wayne\'s World':
      body.setAttribute('style', 'background-image: url(https://video-images.vice.com/articles/58a1c5d5bddb7c4031426076/lede/1486998611699-Wayne_and_Garth-_FWM_wiki.png)');
      break;
  }
}

titles.addEventListener('change', () => {
  printTitle(event.target.value);
});
