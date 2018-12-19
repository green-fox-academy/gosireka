const base_url = 'http://secure-reddit.herokuapp.com/simple';

const xhr = new XMLHttpRequest();
const submit = document.querySelector('#submit-button');
let title = document.querySelector('textarea');
let url = document.querySelector('input');
let form = document.querySelector('form');

submit.addEventListener('click', ()=>{
  event.preventDefault();
  const body = {
    'title': title.value,
    'url' : url.value,
    'timestamp': Date.now()
  }
  xhr.open('POST', `${base_url}/posts`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      window.location.replace('file:///Users/reka/Documents/greenfox/gosireka/week-08/reddit/reddit.html');
    }
  }
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(body));
});


