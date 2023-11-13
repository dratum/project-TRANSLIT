/* eslint-disable linebreak-style */
const button = document.querySelector('.button-add-word');
const input = document.querySelector('input');

function addWord() {
  const word = input.value;
  console.log(word);
}
button.addEventListener('click', addWord);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('.button-add-word').click();
  }
});
