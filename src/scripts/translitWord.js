import glossaryList from './glossaryList.js';
const input = document.querySelector('input');
const wordsRu = document.querySelector('.words-left');
const wordsEn = document.querySelector('.words-right');

let targetId = 1;

function generateTranslit(word) {
  let translitValue = '';
  for (let i = 0; i < word.length; i += 1) {
    if (glossaryList[word[i]]) {
      translitValue += glossaryList[word[i]];
    } else {
      translitValue += word[i];
    }
  }
  return translitValue;
}

export function addWord() {
  const word = input.value;

  function trimWord(wordString) {
    const maxLength = 13;
    let result = wordString;
    if (wordString.length > maxLength) {
      result = `${result.slice(0, 13)}...`;
    }
    return result;
  }

  if (word) {
    const newDivRu = document.createElement('div');
    const newSpanRu = document.createElement('span');
    const translitValue = generateTranslit(trimWord(word));

    newDivRu.setAttribute('id', `n${targetId}`);
    newDivRu.className = 'russian-word phrase';
    newSpanRu.setAttribute('hidden-text', word);
    newSpanRu.append(document.createTextNode(trimWord(word)));
    wordsRu.append(newDivRu);
    newDivRu.append(newSpanRu);

    const newDivEn = document.createElement('div');
    const newSpanEn = document.createElement('span');
    const newDeleteString = document.createElement('img');

    newDivEn.setAttribute('id', `m${targetId}`);
    newDivEn.className = 'translate-word phrase';
    newSpanEn.setAttribute('hidden-text', generateTranslit(word));
    newDeleteString.className = 'delete-string';
    newDeleteString.setAttribute('alt', 'delete');
    newDeleteString.setAttribute('src', './src/icons/Group 1.svg');

    newSpanEn.append(document.createTextNode(translitValue));
    wordsEn.append(newDivEn);
    newDivEn.append(newSpanEn);
    newDivEn.append(newDeleteString);
    targetId += 1;
  } else {
    alert('Введите текст в поле ввода');
  }

  input.value = '';
  input.focus();
}
