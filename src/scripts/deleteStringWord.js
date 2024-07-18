export default function deleteStringWithWords(e) {
  const word = e.target.closest('.phrase');
  const wordId = word.id;
  const wordRu = document.getElementById(`n${wordId.substring(1)}`);
  if (word === document.getElementById('m0')) {
  } else {
    word.remove();
    wordRu.remove();
  }
}
