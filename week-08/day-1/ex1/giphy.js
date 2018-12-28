const BASE_URL = "http://api.giphy.com";

let xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    createImgs(response);
  }
}

function createImgs(response) {
  const container = document.querySelector('#container');
  response.data.forEach(element => {
    let newImg = document.createElement('img');
    let counter = 0;
    newImg.setAttribute('src', element.images.downsized_still.url);
    container.appendChild(newImg);
    newImg.onclick = () => {
      if (counter % 2 === 0) {
        newImg.setAttribute('src', element.images.downsized.url);
      } else {
        newImg.setAttribute('src', element.images.downsized_still.url);
      }
      counter++;
    }
  });
}

xhr.open('GET', `${BASE_URL}/v1/gifs/search?api_key=oobU9U9BnSvczlvKMW5mLdCI0yanUpsQ&q=christmas+funny&limit=16&offset=0&rating=G&lang=en`);
xhr.send();
