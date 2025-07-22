/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'jAvascrIpt';
let stringVowels = "";
let count = 0;
for (let i = 0; i < word.length; i++){
    const valueString = word[i];
    if (valueString === "a" || valueString === "e" || valueString === "i" || valueString === "o" || valueString === "u"){
        stringVowels += valueString;
        count += 1;
    }
}
// console.log(count, stringVowels);



// Dichiara la funzione qui.
function getVowels2 (string){
    let stringVowels = "";
    let count = 0;
    for (let i = 0; i < string.length; i++){
        const valueString = string[i];
        let vowels = "aeiou";
        console.log(vowels.includes(valueString));
        if (vowels.includes(valueString.toLowerCase())){
            console.log("1" + valueString.toLowerCase());
            console.log("2" +vowels);
            console.log("3" +valueString);

            
            stringVowels += valueString;
            count += 1;
            console.log("sss " + stringVowels);
            
        }
    }
    return `${count} ${stringVowels}`;
}

//arrow function
const getVowels = string => {
    let stringVowels = "";
    let count = 0;
    for (let i = 0; i < string.length; i++){
        const valueString = string[i];
        let vowels = "aeiou"
        if (valueString.includes(vowels.toUpperCase())){
            stringVowels += valueString;
            count += 1;
        }
    }
    return `${count} ${stringVowels}`;
}
// Invoca la funzione qui e stampa il risultato in console

const checkgetVowels2 = getVowels2 (word);
console.log(checkgetVowels2)

//arrow function
console.log(getVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)