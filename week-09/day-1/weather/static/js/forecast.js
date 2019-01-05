'use strict';

const cityCards = document.querySelectorAll('.city');

cityCards.forEach(cityCard => {
  const cityId = cityCard.getAttribute('id');
  cityCard.addEventListener('click', () => {
    window.location.assign(`/cities/${cityId}`);
  });
});
