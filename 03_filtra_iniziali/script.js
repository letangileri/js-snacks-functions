/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];



// Dichiara la funzione qui.
function getStringFromLetter(string, charUser){
    let charOfString = "";
    let namesOfLetter = [];
    for (let i = 0; i < string.length; i++){
        const valueString = string[i];
        charOfString = valueString.charAt(0);
        if (charOfString === charUser){
            namesOfLetter.push(valueString);
        }
    }
    return namesOfLetter;
}

//arrow function
const getStringFromLetter2 = (string, charUser) => {
    let charOfString = "";
    let namesOfLetter = [];
    for (let i = 0; i < string.length; i++){
        const valueString = string[i];
        charOfString = valueString.charAt(0);
        if (charOfString === charUser){
            namesOfLetter.push(valueString);
        }
    }
    return namesOfLetter;
}

// Invoca la funzione qui e stampa il risultato in console
const checkgetStringFromLetter = getStringFromLetter(names, "A");
console.log(checkgetStringFromLetter);

//arrow function
console.log(getStringFromLetter2(names, "L"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]