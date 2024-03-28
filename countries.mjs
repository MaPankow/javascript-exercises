/**
 * Die folgenden drei Zeilen braucht ihr nicht verstehen!
 * ( Dürft ihr aber, wenn ich wollt. ;-) )
 */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const countries = require("./countries.json");

/**
 * Schreibe eine Funktion, die ein Land daraufhin prüft, ob es in Europa liegt.
 * 
 * @param {object} country 
 * @returns {boolean}
 */


export function isEurope (country) { 

    if (country.region === "Europe"){
        console.log('Yes');
        return true
    } 
    else {console.log('No');
    return false;
    };
}
isEurope(countries.at(0));


/**
 * Schreibe eine Funktion, die den official name eines Landes zurückgibt.
 * 
 * @param {object} country 
 * @returns {string}
 */
export function officialName(country) {
    return country.name.official
}

officialName(countries.at(0)); 
console.log(officialName(countries.at(0)));

/**
 * Schreibe eine Funktion, die alle Namen (common, official, native, ...) eines
 * Landes in einer Liste zurück gibt.
 * 
 * @param {object} country 
 * @returns {[string]}
 */
export function allNames (country) {
    const array = [];
    array.push(country.name.common);
    array.push(country.name.official);
    Object.keys(country.name.nativeName).forEach((language) => {
        array.push(country.name.nativeName[language].common);
        array.push(country.name.nativeName[language].official);  
    });
    return array;
}

console.log(allNames(countries.at(0)));
/**
 * Schreibe eine Funktion, die ein Objekt nach einer Liste von keys filtert und
 * ein neues Objekt zurückgibt, welches nur die angegebenen keys sowie die
 * dazugehörigen Werte enthält.
 * 
 * Beispiel:
 * 
 * const obj = {
 *     apfel: 10,
 *     banane: 20,
 *     kiwi: 15,
 *     maracuja: 42
 * }
 * 
 * filterKeys(obj, ["apfel", "maracuja"])
 * 
 * Ergebnis:
 * 
 * {
 *     apfel: 10,
 *     maracuja: 42
 * }
 * 
 * @param {object} obj 
 * @param {[*]} keys 
 * @returns {object}
 */
export function filterKeys (obj, keys) {
    const obj = {},
    
   
}