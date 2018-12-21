const base_url = 'http://secure-reddit.herokuapp.com/simple';

const xhr = new XMLHttpRequest();
const icon = document.querySelector('#icon');
icon.addEventListener('click', ()=>{
  window.location.replace('file:///Users/reka/Documents/greenfox/gosireka/week-08/reddit/src/reddit.html');
});

xhr.open('GET', `${base_url}/posts`);

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    createPosts(response);
  }
}
xhr.send();

const createPosts = (response) => {
  const postContainer = document.querySelector('#posts');

  response.posts.forEach(post => {
    newPost = document.createElement('div');
    newPost.setAttribute('class', 'post');
    newPost.setAttribute('data-id', post.id);
    postContainer.appendChild(newPost);
    let rightDiv = document.createElement('div');
    rightDiv.setAttribute('class', 'right-div');
    createScore(newPost, post);
    createTitle(rightDiv, post);
    createDate(rightDiv, post);
    createUser(rightDiv, post);
    createModify(rightDiv);
    createRemove(rightDiv);
    newPost.appendChild(rightDiv);
  });
}

const createScore = (newPost, post) => {
  let newScoreDiv = document.createElement('div');
  newScoreDiv.setAttribute('class', 'score-div');
  let newScore = document.createElement('h1');
  let newUp = document.createElement('img');
  newUp.setAttribute('src', './static/assets/images/arrows/upvote.png');
  newUp.setAttribute('class', 'upvote');
  let newDown = document.createElement('img');
  newDown.setAttribute('src', './static/assets/images/arrows/downvote.png');
  newDown.setAttribute('class', 'downvote');
  newScore.setAttribute('class', 'score');
  newScore.textContent = post.score;
  newScoreDiv.appendChild(newUp);
  newScoreDiv.appendChild(newScore);
  newScoreDiv.appendChild(newDown);
  newPost.appendChild(newScoreDiv);
  newUp.addEventListener('click', () => {
    if (newUp.getAttribute('class') === 'upvote' && newDown.getAttribute('class') === 'downvoted') {
      newDown.setAttribute('src', './static/assets/images/arrows/downvote.png');
      newDown.setAttribute('class', 'downvote');
      upVote(post.id);
    } else if (newUp.getAttribute('class') === 'upvote') {
      newUp.setAttribute('src', './static/assets/images/arrows/upvoted.png');
      newUp.setAttribute('class', 'upvoted');
      upVote(post.id);
    }
  });
  newDown.addEventListener('click', () => {
    if (newDown.getAttribute('class') === 'downvote' && newUp.getAttribute('class') === 'upvoted') {
      newUp.setAttribute('src', './static/assets/images/arrows/upvote.png');
      newUp.setAttribute('class', 'upvote');
      downVote(post.id);
    } else if (newDown.getAttribute('class') === 'downvote') {
      newDown.setAttribute('src', './static/assets/images/arrows/downvoted.png');
      newDown.setAttribute('class', 'downvoted');
      downVote(post.id);
    }
  });
}

const upVote = (postID) => {
  const upvoteReq = new XMLHttpRequest;
  upvoteReq.open('PUT', `${base_url}/posts/${postID}/upvote`);
  upvoteReq.setRequestHeader('Accept', 'application/json');
  upvoteReq.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(upvoteReq.responseText);
      let post = document.querySelector(`div[data-id="${postID}"]`);
      let score = post.querySelector('.score');
      score.innerText = response.score;
    }
  }
  upvoteReq.send();
}

const downVote = (postID) => {
  const downvoteReq = new XMLHttpRequest;
  downvoteReq.open('PUT', `${base_url}/posts/${postID}/downvote`);
  downvoteReq.setRequestHeader('Accept', 'application/json');
  downvoteReq.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(downvoteReq.responseText);
      let post = document.querySelector(`div[data-id="${postID}"]`);
      let score = post.querySelector('.score');
      score.innerText = response.score;
    }
  }
  downvoteReq.send();
}

const createTitle = (rightDiv, post) => {
  let newTitle = document.createElement('a');
  newTitle.setAttribute('class', 'title');
  newTitle.setAttribute('href', post.url);
  newTitle.textContent = post.title;
  rightDiv.appendChild(newTitle);
}

const createDate = (rightDiv, post) => {
  let newDate = document.createElement('h2');
  newDate.setAttribute('class', 'date');
  console.log(post);
  newDate.textContent = `Submitted: ${new Date(post.timestamp).toLocaleDateString('en-US')}`;
  rightDiv.appendChild(newDate);
}

const createUser = (rightDiv, post) => {
  let newUser = document.createElement('h2');
  newUser.setAttribute('class', 'user');
  if (post.user === null) {
    newUser.textContent = 'by anonymus';
  } else {
    newUser.textContent = `by ${post.user}`;
  }
  rightDiv.appendChild(newUser);
}

const createModify = (rightDiv) => {
  let newModifyLink = document.createElement('a');
  newModifyLink.setAttribute('class', 'modify');
  newModifyLink.setAttribute('href', '#');
  newModifyLink.textContent = 'Modify';
  rightDiv.appendChild(newModifyLink);
}

const createRemove = (rightDiv) => {
  let newRemoveLink = document.createElement('a');
  newRemoveLink.setAttribute('class', 'remove');
  newRemoveLink.setAttribute('href', '#');
  newRemoveLink.textContent = 'Remove';
  rightDiv.appendChild(newRemoveLink);
}
