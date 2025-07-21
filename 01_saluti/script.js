/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function getName (name){
    return `Ciao ${name}`;
}

const getName2 = name => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console
const callGetName = getName("Mario");
console.log(callGetName);

console.log(getName2("Mario"));


//Risultato atteso se si passa 'Mario': // ciao Mario
