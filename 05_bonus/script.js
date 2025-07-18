/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const username = 'Mario';


// Dichiara la funzione qui.
//arrow function
const getGreeting = (user, time) => {
    if ((time >= 4) && (time <= 13)){
        return "Buongiorno " + user;
    } else if ((time > 13) && (time <= 17)){
        return "Buon pomeriggio " + user;
    }
    return "Buonasera " + user;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getGreeting(username,14));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.