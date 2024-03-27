const inventar = [
    { name: "Apfel", kategorie: "Obst", anzahl: 10 },
    { name: "Banane", kategorie: "Obst", anzahl: 20 },
    { name: "Birne", kategorie: "Obst", anzahl: 15 },
    { name: "Karotte", kategorie: "Gemüse", anzahl: 10 },
    { name: "Spinat", kategorie: "Gemüse", anzahl: 5 },
    { name: "Kartoffel", kategorie: "Gemüse", anzahl: 25 }
  ];

  //Bericht 1: Produktliste nach Kategorie (Verwendung for-of)
  // Ausgabe Namen der Produkte, gruppiert in der Kategorie

  let kategorie = {}
  for (let produkt of inventar) {
    
    if(kategorie [produkt.kategorie]){
        console.log("Obst" + inventar.name)
    }
    else {
        console.log("Gemüse" + inventar.name)
    } 
       
    }
  