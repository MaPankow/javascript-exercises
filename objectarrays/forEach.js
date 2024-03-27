let zahlen = [1, 2, 3, 4, 5];
zahlen.forEach(arr => console.log(arr)); 

// Schreibt ein array mit einer forEach-Funktion

let zahlen2 = [6, 7, 8, 9, 10];
zahlen2.forEach(multi => console.log(multi *2));

// erstellt eine Funktion mit Map und mehreren Eingaben

let zahlen3 = [4, 5, 6, 7, 8];
let zahl2 = 3;
zahlen3.map(zahl => console.log(zahl + zahl2));

let zahlen4 = [1, 2, 3, 4, 5, 6];
zahlen4.filter(zahl => console.log(zahl % 2 == 0));

console.log("--------------------------------------------");

//Find

let numbers = [ 17, 28, 5, 92, 87]
let  result = numbers.find(element => element == 28 );
console.log(result);

//FindIndex

let istGroesserAls28 = (element) = element > 28;