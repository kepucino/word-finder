const filePath = './assets/slownik/slowa.txt';
let wordsArray;

const letters = ['a', 'a', 'a', 'a', 'a', 'a', 'a'];

fetch(filePath)
  .then((res) => res.text())
  .then((text) => {
    wordsArray = text.split(/\s+/);
    console.log(wordsArray);

    document.getElementById('word-input').addEventListener('change', function(e) {
        word = document.getElementById('word-input').value;
        console.log(word);
    });
   })
  .catch((e) => console.error(e));
