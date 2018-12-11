const paragraphs = [
  'The Universe is all of space and time and their contents, including planets, stars, galaxies, and all other forms of matter and energy. While the spatial size of the entire Universe is still unknown, it is possible to measure the observable universe. The earliest scientific models of the Universe were developed by ancient Greek and Indian philosophers and were geocentric, placing Earth at the centre of the Universe.',
  'Characteristic features of parrots include a strong, curved bill, an upright stance, strong legs, and clawed zygodactyl feet. Many parrots are vividly coloured, and some are multi-coloured. Most parrots exhibit little or no sexual dimorphism in the visual spectrum. They form the most variably sized bird order in terms of length.',
  'Cats are similar in anatomy to the other felids, with a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey. Cat senses fit a crepuscular and predatory ecological niche. Cats can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small animals. They can see in near darkness. ',
  'The pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colours, most often fawn or black, and a compact square body with well-developed muscles. Pugs were brought from China to Europe in the sixteenth century and were popularized in Western Europe by the House of Orange of the Netherlands, and the House of Stuart.',
  'Foxes are small-to-medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush). Twelve species belong to the monophyletic "true foxes" group of genus Vulpes.',
  'The exchanging of gifts is one of the core aspects of the modern Christmas celebration, making it the most profitable time of year for retailers and businesses throughout the world. On Christmas, people exchange gifts based on the Christian tradition associated with Saint Nicholas, and the gifts of gold, frankincense, and myrrh which were given to the baby Jesus by the Magi.',
  'The shape of the snowflake is determined broadly by the temperature and humidity at which it is formed. Rarely, at a temperature of around −2 °C (28 °F), snowflakes can form in threefold symmetry — triangular snowflakes. The most common snow particles are visibly irregular, although near-perfect snowflakes may be more common in pictures because they are more visually appealing.',
  'A drink is considered "alcoholic" if it contains ethanol, commonly known as alcohol (although in chemistry the definition of "alcohol" includes many other compounds). Beer has been a part of human culture for 8,000 years. In many countries, imbibing alcoholic drinks in a local bar or pub is a cultural tradition.'
]
const imageList = document.querySelectorAll('.pic');
const imageButtonList = document.querySelectorAll('#images button');

const actualImage = document.querySelector("#actual");
const actualTitle = document.querySelector('h1');
const actualParagraphContent = document.querySelector('p');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

//change picture

function setNewSrcToImage(actualImgIndex) {
  let newSrc = imageList[actualImgIndex].getAttribute('src');
  actualImage.setAttribute('src', newSrc);
}

function setNewTitle(actualImgIndex) {
  let newTitle = imageList[actualImgIndex].getAttribute('alt');
  actualTitle.innerHTML = newTitle;
}

function highlightActualPic(actualImgIndex) {
  imageButtonList[actualImgIndex].setAttribute('style', 'box-shadow: 10px 10px 5px grey; opacity: 1');
}

function unHighlight(index) {
  imageButtonList[index].setAttribute('style', 'box-shadow: 0; opacity: 0.5');
}

function changeParagraphContent(actualImgIndex) {
  let newParagraphContent = paragraphs[actualImgIndex];
  actualParagraphContent.innerHTML = newParagraphContent;
}

function changePicture(index) {
  setNewTitle(index);
  setNewSrcToImage(index);
  changeParagraphContent(index);
  highlightActualPic(index);
}

let actualImageIndex = 0;

//right arrow 
rightArrow.onclick = () => {
  if (actualImageIndex !== 7) {
    actualImageIndex++;
    unHighlight(actualImageIndex - 1);
  } else {
    actualImageIndex = 0;
    unHighlight(7);
  }
  changePicture(actualImageIndex);
}

//left arrow 
leftArrow.onclick = () => {
  if (actualImageIndex !== 0) {
    actualImageIndex--;
    unHighlight(actualImageIndex + 1);
  } else {
    actualImageIndex = 7;
    unHighlight(0);
  }
  changePicture(actualImageIndex);
}

//select from image buttons
imageButtonList.forEach((e, index) => {
  e.onclick = () => {
    unHighlight(actualImageIndex);
    actualImageIndex = index;
    changePicture(index);
  }
});
