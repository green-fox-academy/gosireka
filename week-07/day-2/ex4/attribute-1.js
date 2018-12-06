// Write the image's url to the console.
const image = document.querySelector('img');
console.log(image.getAttribute('src'));

// Replace the image with a picture of your favorite animal.
image.setAttribute('src', 'https://www.ensembl.org/i/species/Ochotona_princeps.png');

// Make the link point to the Green Fox Academy website.
const link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');

// Disable the second button.
const button = document.querySelector('.this-one');
button.setAttribute('disabled', 'true');

// Replace its text with 'Don't click me!'.
button.innerHTML ='Don\'t click me!';
