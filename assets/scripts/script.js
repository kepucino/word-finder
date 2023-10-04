function czyJestSlowem(slowo, litery) {
  const sumaLiter = {};
  
  for (const litera of litery)
    sumaLiter[litera] = 0;

  for (const litera of litery)
    sumaLiter[litera] += 1;
  
  for (const litera of slowo) {
    if (!sumaLiter[litera])
      return false;

    sumaLiter[litera]--;
  }
  
  return true;
}

function wylosuj(ile) {
  const alfabet = 'abcdefghijklmnopqrstuvwxyz';
  let losoweLitery = '';

  for (let i = 0; i < ile; i++) {
    const losowaLiczba = Math.floor(Math.random() * alfabet.length);
    losoweLitery += alfabet[losowaLiczba];
  }

  return losoweLitery;
}

const slownik = './assets/slownik/slowa.txt';
var litery = "";
var slowaZeSlownika;

document.getElementById('button').addEventListener('click', function() {
  litery = wylosuj(7);
  
  document.getElementById("litery").innerText = "Wylosowane litery: " + litery;

  var dobreSlowa = [];

  for (let i=0; i < slowaZeSlownika.length; i++) {
    let slowo = slowaZeSlownika[i];

    if (czyJestSlowem(slowo, litery))
    dobreSlowa.push(slowo);
  }

  document.getElementById("slowa").innerHTML = "<b>Słowa możliwe do ułożenia:</b><br>";
  
  for (let i=0; i < dobreSlowa.length; i++) {
    console.log(dobreSlowa[i]);
    document.getElementById("slowa").innerHTML += `<a href=\"https://sjp.pl/${dobreSlowa[i]}\">${dobreSlowa[i]}</a> `;
  }
});

fetch(slownik)
  .then((res) => res.text())
  .then((text) => {
    slowaZeSlownika = text.split(/\s+/);
   })
  .catch((e) => console.error(e));
