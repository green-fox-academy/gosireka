const BASE_URL = "http://api.nytimes.com";

let xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    createArticles(response);
  }
}

function createArticles (response) {
  const container = document.querySelector('#container');
  response.response.docs.forEach(element => {
    let newArticle = document.createElement('ul');
    let newHeadline = document.createElement('li');
    let newSnippet = document.createElement('li');
    let newDate = document.createElement('li');
    let newLink = document.createElement('li');
    let newA = document.createElement('a');

    newHeadline.innerHTML = element.headline.main;
    newSnippet.innerHTML = element.snippet;
    newDate.innerHTML = element.pub_date;
    newA.setAttribute('href', element.web_url);
    newA.innerHTML = element.web_url;
    newLink.appendChild(newA);
    newArticle.appendChild(newHeadline);
    newArticle.appendChild(newSnippet);
    newArticle.appendChild(newDate);
    newArticle.appendChild(newLink);
    container.appendChild(newArticle);
  });
}

xhr.open('GET', `${BASE_URL}/svc/search/v2/articlesearch.json?q=apollo+11+moon&api-key=246b167048894cd98dbfff33635149bb`);
xhr.send();
