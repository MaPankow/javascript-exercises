const buecher = [
    { titel: "Der Hobbit", autor: "J.R.R. Tolkien", jahr: 1937, gelesen: true },
    { titel: "Harry Potter und der Stein der Weisen", autor: "J.K. Rowling", jahr: 1997, gelesen: false },
    { titel: "1984", autor: "George Orwell", jahr: 1949, gelesen: true },
    { titel: "Brave New World", autor: "Aldous Huxley", jahr: 1932, gelesen: false }
  ];

  //alle Bücher ausgeben mit forEach

  //buecher.forEach(autor, titel => console.log(titel, " von ", autor))

  buecher.forEach(buch => {
    console.log("Buchtitel: " + buch.titel + ", Autor*in: " + buch.autor);
})

//Erstellen einer Liste der Buchtitel durch map

const buchtitel = buecher.map(buchtitel => {return buchtitel.titel});
console.log(buchtitel);

//alle Bücher, die nicht gelesen wurden, mit filter
let nichtGelesen = buecher.filter(nichtGelesen => {return nichtGelesen.gelesen == false});
console.log(nichtGelesen);

//das erste Buch von vor 1950, das gelesen wurde mit find

let altesBuch = buecher.find(altesBuch => {return altesBuch.jahr < 1950});
console.log(altesBuch);

/*finde "1984" mit findIndex
const woIst1984 = (element) => (element.titel = "1984"));
console.log(buecher.findIndex(woIst1984)); */

/*Verwende "includes" (auf einem Array der Buchtitel), 
um zu überprüfen, ob ein bestimmtes Buch in der Liste ist*/

// const buchtitel = buecher.map(buchtitel => {return buchtitel.titel});
console.log(buchtitel.includes("1984"));

// mit "some" überprüfen, ob mindestens ein Buch vor 1937 veröffentlicht wurde

const erscheinungsjahr = buecher.map(erscheinungsjahr => {return erscheinungsjahr.jahr});
console.log(erscheinungsjahr);
const istAelterAls1937 = (erscheinungsjahr) => erscheinungsjahr < 1937;
console.log(buecher.some(istAelterAls1937));

// mit every überprüfen, ob alle Bücher gelesen wurden
const booleanGelesen = buecher.map(booleanGelesen => {return booleanGelesen.gelesen});
console.log(booleanGelesen);
const alleGelesen = (element) => element == true;
console.log(buecher.every(alleGelesen));