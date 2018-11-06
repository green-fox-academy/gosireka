'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

function correctUrl(wrongUrl) {
  let correctUrl = wrongUrl.replace('https', 'https:').replace('bots', 'odds');
  return correctUrl;
}

url = correctUrl(url);

console.log(url);
