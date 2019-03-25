
function fetchHouses() {
  //write fetch request to the Game of Thrones API
  fetch('https://anapioficeandfire.com/api/houses')
  .then(resp => resp.json())
  .then(json => renderHouses(json));
}

function renderHouses(json) {
  const main = document.querySelector('main');
  json.forEach(house => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `<h2>${house.name}</h2>`;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchHouses();
});