// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
const paragraphs = document.querySelectorAll('p');
if (paragraphs[3].classList.contains('dolphin')) {
  document.querySelector('.apple').innerHTML = 'pear';
}

// If the first p has an 'apple' class, replace cat's content with 'dog'
if (paragraphs[0].classList.contains('apple')) {
  document.querySelector('.cat').innerHTML = 'dog';
}

// Make apple red by adding a .red class
const apple = document.querySelector('.apple');
apple.classList.add('red');

// Make balloon less balloon-like (change its shape)
const balloon = document.querySelector('.balloon');
balloon.setAttribute('style', 'border-radius: 0');
