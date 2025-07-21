/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function getCharListNames (names){
    let charsOfNames = [];
    let char = "";
    for (let i = 0; i < names.length; i++){
        const valueName = names[i];
        char = valueName.charAt(0);
        charsOfNames.push(char);
    }
    return charsOfNames;
}
function getCharListNames3 (names){
    let charsOfNames = [];
    for (let i = 0; i < names.length; i++){
        const valueName = names[i];
        charsOfNames.push(valueName.charAt(0));
    }
    return charsOfNames;
}

function getCharListNames4 (names){
    let charsOfNames = [];
    for (let i = 0; i < names.length; i++){
        let char = "";
        const valueName = names[i];
        char = valueName.charAt(0);
        charsOfNames.push(char);
    }
    return charsOfNames;
}


//arrow function
const getCharListNames2 = names =>{
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

const checkgetCharListNames = getCharListNames(names);
console.log(checkgetCharListNames);

const checkgetCharListNames3 = getCharListNames3(names);
console.log(checkgetCharListNames3);

const checkgetCharListNames4 = getCharListNames4(names);
console.log(checkgetCharListNames4);

//arrow function
console.log(getCharListNames2(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]