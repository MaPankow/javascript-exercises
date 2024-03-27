/**
 * Schreibe je eine Funtion add, substract, multiply, divide, die die
 * jeweilige Grundrechenart auf die beiden übergebenen Parameter A und B
 * anwendet. Verwende Arrow-Funktionen.
 */
export const add = (a, b) => {
    return a + b;
}
console.log(add(1, 7));

export const substract = (a, b) => {
    return a - b;
}
console.log(substract(60, 18));

export const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(7, 5));

export const divide = (a, b) => {
    return a / b;
}
console.log(divide(8, 2));

/**
 * Schreibe eine Funktion, die eine Temeratur in Celsius in eine Temperatur in
 * Fahrenheit umrechnet.
 * 
 * @param {*} celsius 
 */
export function inFahrenheit (celsius) {

    // ...
}

/**
 * Schreibe eine Funktion, die eine Temeratur in Fahrenheit in eine Temperatur
 * in Celsius umrechnet.
 * 
 * @param {*} celsius 
 */
export const inCelsius = (fahrenheit) => {

    // ...
}

/**
 * Schreibe eine Funktion, die prüft, ob eine Zahl gerade ist.
 */
export const isEven = () => undefined // TODO

/**
 * Schreibe eine Funktion, die prüft, ob eine Zahl ungerade ist.
 */
export const isOdd = () => undefined // TODO

// Kontrollfluss

// if

/**
 * Schreibe eine Funkntion, die abhängig von dem als Zahl eingegebenen Monat die
 * passende Jahreszeit zurückgibt. Und zwar
 * 
 * "Frühling" für die Monate März, April, Mai
 * "Sommer" für die Monate Juni, Juli, August
 * "Herbst" für die Monate September, Oktober, November und
 * "Winter" für die Monate Dezember, Januar und Februar.
 *
 * @param {int} monat 
 * @returns {string} Jahreszeit
 */
export function jahreszeit (monat) {

    // ...
}

/**
 * Schreibe eine Funktion, die die Umsatzsteuer anhand des Umsatzes und des
 * Steuerjahres berechnet. Der Steuersatz beträgt 19%. Liegt der Umsatz unter
 * der Freigrenze von 17.500 EUR (für die Steuerjahre 2003-2019) bzw. 22.000 EUR
 * (für die Steuerjahre ab 2020) soll die Kleinunternehmerregelung angewendet
 * und keine Umsatzsteuer berechnet werden. Der Rückgabewert ist dann 0.
 * 
 * @param {*} umsatz 
 * @param {*} steuerjahr 
 * @returns Umsatzsteuer
 */
export function umsatzsteuer (umsatz, steuerjahr = 2024) {
    if (steuerjahr >= 2020) {
        if (umsatz < 22000) {
            return 0;
        }
        else {
            return umsatz / 100 * 19;
        }
    }
    if (steuerjahr >= 2003 && steuerjahr < 2020) {
        if (umsatz < 17500) {
            return 0;
        }
        else {
            return umsatz / 100 * 19;
        }
    }

}
console.log(umsatzsteuer(17400, 2018));

// switch

/**
 * Schreibe eine Funktion, die den Flächeninhalt verschiedener geometrischer
 * Formen berechnet. Die Funktion soll zwei Argumente erhalten:
 * Den Namen der geometrischen Form (circle, triangle, rectangle), sowie die
 * dafür relevanten Parameter als ein Objekt.
 * Für die Berechnung eines Kreises wird der Radius (radius) benötigt.
 * Für die Berechnung eines Dreieckes sowie eines Rechteckes werden die Länge
 * der Grundseite (base) sowie die Höhe (height) benötigt.
 * 
 * @param {*} shape 
 * @param {*} params 
 * @returns Flächeninhalt der Figuren
 */
export const area = (shape, params) => {
    
    switch (shape) {
        
        case "circle": 

            return Math.PI * params.radius**2;
  
        case "triangle":
            return params.base * (params.height / 2);

        case "rectangle":
            return params.base * params.height;
    }

}

// loops

/**
 * Schreibe eine Funktion, die alle Karten eines Kartenspiels jeweils mit ihrer
 * Farbe (Clubs, Spades, Hearts, Diamonds) und ihrem Wert (2 - 10, J, K, Q, A)
 * erzeugt.
 * Die Karten werden als Array bestehend aus Farbe und Wert dargestellt und alle
 * Karten in einem Array gesammelt zurückgegeben.
 * 
 * @returns 
 */
export function deckOfCards () {
    const farben = ["Clubs", "Spades", "Hearts", "Diamonds"];
    const werte = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "A"]
    const cards = []

    for (let index in farben) {
        //console.log(farben[index])
         for(let index2 in werte) {
            //console.log(werte[index2]);
            cards.push([farben[index], werte[index2]])
         }
        }
        return cards;
        }
     console.log(deckOfCards());
     


/**
 * Schreibe eine Funktion, die die ersten N Antworten für das FizzBuzz-Spiel
 * erzeugt und auf der Konsole ausgibt.
 * 
 * @param {*} i 
 * @see https://de.wikipedia.org/wiki/Fizz_buzz
 */


export const fizzBuzz = (n) => {
        for (let i = 1; i <= n; i++) {
    
            if (i % 15 == 0) {console.log('fizzbuzz')}
            else if (i % 3 == 0) {console.log('fizz')}
            else if (i % 5 == 0) {console.log('buzz')}
            else {console.log(i)}

        }
        
    }    
  fizzBuzz(70)

// recursion

/**
 * Schreibe eine rekursive Funktion, die die N-te Fibonacci-Zahl berechnet.
 * 
 * @param {*} n 
 * @returns n-th Fibonacci number
 * @see https://de.wikipedia.org/wiki/Fibonacci-Folge
 */
export function fibonacci (n) {
    
    // ...
}