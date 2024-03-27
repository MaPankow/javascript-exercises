let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number));

let soldats = [
    { name: "Ryan", age: 21, rank: "Major" },
    { name: "Antony", age: 28, rank: "Canonier" },
    { name: "Sully", age: 19, rank: "Cook" },
];

soldats.forEach((soldat) => {
    console.log("Name: " + soldat.name);
    console.log("Age: " + soldat.age);
    console.log("Rank: " + soldat.rank);
    console.log("------------------");
});
