// Add an item that says 'The Green Fox' to the asteroid list.
const asteroidList = document.querySelector('.asteroids');
const greenFoxItem = document.createElement('li');
greenFoxItem.textContent = 'The Green Fox';
asteroidList.appendChild(greenFoxItem);

// Add an item that says 'The Lamplighter' to the asteroid list.
const lamplighter = document.createElement('li');
lamplighter.textContent = 'The Lamplighter';
asteroidList.appendChild(lamplighter);

// Add a heading saying 'I can add elements to the DOM!' to the .container.
const container = document.querySelector('.container');
const heading = document.createElement('h1');
heading.textContent = 'I can add elements to the DOM!';
container.appendChild(heading);

// Add an image, any image, to the container.
const image = document.createElement('img');
image.setAttribute('src', 'https://www.ensembl.org/i/species/Ochotona_princeps.png');
container.appendChild(image);
