function fetchBooks() {
  //write fetch request to the Game of Thrones API
  fetch('https://anapioficeandfire.com/api/books/5')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main');
  json.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `<h2>${book.name}</h2>`;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

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

function fetchCharacters() {
  //write fetch request to the Game of Thrones API
  fetch('https://anapioficeandfire.com/api/characters/1031')
  .then(resp => resp.json())
  .then(json => renderCharacters(json));
}

function renderCharacters(json) {
  const main = document.querySelector('main');
  json.forEach(characters => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `<h2>${character.name}</h2>`;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchCharacters();
});