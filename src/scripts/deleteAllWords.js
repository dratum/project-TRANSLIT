const wordsRu = document.querySelector('.words-left');
const wordsEn = document.querySelector('.words-right');

export default function deleteAllString() {
  while (wordsRu.children.length > 1) {
    wordsRu.removeChild(wordsRu.lastChild);
  }
  while (wordsEn.children.length > 1) {
    wordsEn.removeChild(wordsEn.lastChild);
  }
}
