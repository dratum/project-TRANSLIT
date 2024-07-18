import deleteAllString from './deleteAllWords.js';
import deleteStringWithWords from './deleteStringWord.js';
import { addWord } from './translitWord.js';

const button = document.querySelector('.button-add-word');
const input = document.querySelector('input');
const words = document.querySelector('.table-of-words');
const clearWords = document.getElementById('button-remove');
const wordsEn = document.querySelector('.words-right');

button.addEventListener('click', addWord);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('.button-add-word').click();
    input.value = '';
    input.focus();
  }
});

wordsEn.addEventListener('click', deleteStringWithWords);

clearWords.addEventListener('click', deleteAllString);

function showMoreText(event) {
  const hiddenText = event.target.getAttribute('hidden-text');
  if (event.target.tagName !== 'SPAN') return;
  if (hiddenText.length > 13) {
    event.target.parentNode.classList.add('popup');
  }
}
function hideMoreText(event) {
  if (event.target.parentNode.classList.contains('popup')) {
    event.target.parentNode.classList.remove('popup');
  }
}
words.addEventListener('mouseover', showMoreText);
words.addEventListener('mouseout', hideMoreText);
