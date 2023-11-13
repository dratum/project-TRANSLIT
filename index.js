/* eslint-disable linebreak-style */
const button = document.querySelector('.button-add-word');
const input = document.querySelector('input');
const words = document.querySelector('.table-of-words');

function addWord(e) {
  e.preventDefault();

  const word = input.value;
  const newDiv = document.createElement('div');
  const newSpan = document.createElement('span');
  newDiv.className = 'russian-word';
  newSpan.appendChild(document.createTextNode(word));
  words.appendChild(newDiv);
  newDiv.appendChild(newSpan);
  newSpan.appendChild(word);
}

button.addEventListener('click', addWord);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('.button-add-word').click();
  }
});
