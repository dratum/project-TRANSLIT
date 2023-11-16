const button = document.querySelector('.button-add-word');
const input = document.querySelector('input');
const words = document.querySelector('.table-of-words');
const wordsRu = document.querySelector('.words-left');
const wordsEn = document.querySelector('.words-right');
const clearWords = document.getElementById('button-remove');
const deleteString = document.querySelector('.delete-string');
let targetId = 1;
const glossaryList = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'e',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'c',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ь: "'",
  ы: 'y',
  ъ: "'",
  э: 'e',
  ю: 'yu',
  я: 'ya',

  А: 'A',
  Б: 'B',
  В: 'V',
  Г: 'G',
  Д: 'D',
  Е: 'E',
  Ё: 'E',
  Ж: 'Zh',
  З: 'Z',
  И: 'I',
  Й: 'Y',
  К: 'K',
  Л: 'L',
  М: 'M',
  Н: 'N',
  О: 'O',
  П: 'P',
  Р: 'R',
  С: 'S',
  Т: 'T',
  У: 'U',
  Ф: 'F',
  Х: 'H',
  Ц: 'C',
  Ч: 'Ch',
  Ш: 'Sh',
  Щ: 'Sch',
  Ь: "'",
  Ы: 'Y',
  Ъ: "'",
  Э: 'E',
  Ю: 'Yu',
  Я: 'Ya',
};

// транслитерация
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

// добавляем слово в словарь и транслитерируем его
function addWord(e) {
  const word = input.value;

  function trimWord(word) {
    const maxLength = 15;
    let result = word;
    if (word.length > maxLength) {
      result = result.slice(0, 15) + '...';
    }
    return result;
  }

  if (word) {
    const newDivRu = document.createElement('div');
    const newSpanRu = document.createElement('span');
    const translitValue = generateTranslit(trimWord(word));

    newDivRu.setAttribute('id', 'n' + targetId);
    newDivRu.className = 'russian-word phrase';
    newSpanRu.setAttribute('hidden-text', word);
    newSpanRu.append(document.createTextNode(trimWord(word)));
    wordsRu.append(newDivRu);
    newDivRu.append(newSpanRu);

    const newDivEn = document.createElement('div');
    const newSpanEn = document.createElement('span');
    const newDeleteString = document.createElement('img');

    newDivEn.setAttribute('id', 'm' + targetId);
    newDivEn.className = 'translate-word phrase';
    newSpanEn.setAttribute('hidden-text', generateTranslit(word));
    newDeleteString.className = 'delete-string';
    newDeleteString.setAttribute('alt', 'delete');
    newDeleteString.setAttribute('src', './icons/Group 1.svg');

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
// клик и кнопка enter на добавление слова
button.addEventListener('click', addWord);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('.button-add-word').click();
    input.value = '';
    input.focus();
  }
});

// удаляем любую строчку со словами
function deleteStringWithWords(e) {
  console.log(1);
  const word = e.target.closest('.phrase');
  const wordId = word.id;
  const wordRu = document.getElementById('n' + wordId.substring(1));
  word.remove();
  wordRu.remove();
},
wordsEn.addEventListener('click', deleteStringWithWords);

// Очищаем словарик на странице
function deleteAllString() {
  while (wordsRu.lastChild) {
    wordsRu.removeChild(wordsRu.lastChild);
  }
  while (wordsEn.lastChild) {
    wordsEn.removeChild(wordsEn.lastChild);
  }
}
clearWords.addEventListener('click', deleteAllString);

// показываем полный текст длинных слов
function showMoreText(event) {
  const hiddenText = event.target.getAttribute('hidden-text');
  if (event.target.tagName !== 'SPAN') return;
  if (hiddenText.length > 15) {
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
