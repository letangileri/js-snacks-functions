/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function getCharlistNames (names){
    let charsOfNames = [];
    let char = "";
    for (let i = 0; i < names.length; i++){
        const valueName = names[i];
        char = valueName.charAt(0);
        charsOfNames.push(char);
    }
    return charsOfNames;
}
//arrow function
const getCharlistNames2 = names =>{
    let charsOfNames = [];
    let char = "";
    for (let i = 0; i < names.length; i++){
        const valueName = names[i];
        char = valueName.charAt(0);
        charsOfNames.push(char);
    }
    return charsOfNames;
}

// Invoca la funzione qui e stampa il risultato in console

const checkgetCharlistNames = getCharlistNames(names);
console.log(checkgetCharlistNames);

//arrow function
console.log(getCharlistNames2(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]