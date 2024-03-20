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
console.log(subt(60, 18));

export const multiply = (a, b) => {
    return a * b;
}
console.log(multi(7, 5));

export const divide = (a, b) => {
    return a / b;
}
console.log(divi(8, 2));

// Kontrollfluss

// if

/**
 * Schreibe eine Funktion, die die Umsatzsteuer anhand des Umsatzes und des
 * Steuerjahres berechnet. Der Steuersatz beträgt 19%. Liegt der Umsatz unter
 * der Freigrenze von 17.500 EUR (für die Steuerjahre 2003-2019) bzw. 22.000 EUR
 * (für die Steuerjahre ab 2020) soll die Kleinunternehmerregelung angewendet
 * und keine Umsatzsteuer berechnet werden. Der Rückgabewert ist dann 0.
 * 
 * @param {*} umsatz 
 * @param {*} steuerjahr 
 * @returns 
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
 * @returns 
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
    
    
}

/**
 * Schreibe eine Funktion, die die ersten N Antworten für das FizzBuzz-Spiel
 * erzeugt und auf der Konsole ausgibt.
 * 
 * @param {*} n 
 * @see https://de.wikipedia.org/wiki/Fizz_buzz
 */
export function fizzbuzz (n) {
    
    // ...
}

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