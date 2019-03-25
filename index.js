

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