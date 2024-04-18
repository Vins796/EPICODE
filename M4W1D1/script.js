// ESERCIZIO 1 //

// Crea una funzione che controlli due numeri interi.
// Ritorna true se UNO dei due è 50 o se la somma dei due è 50

function corrispondenzaNumeri (numero1, numero2) {
    if (numero1 === 50 || numero1 + numero2 == 50) {
        return true
    } else {
        return false;
    }
}

console.log(corrispondenzaNumeri(25, 25)); 

// ESERCIZIO 2 //

// Crea una funzione che rimuova il carattere ad un specfica posizione da una stringa
// Passa la stringa e la posizione come paramentri e ritorna la stringa modificata

let inputString = 'Vincenzo';
let inputPosition = 3;

function removeChar(stringa, posizione) {
    let arrayStringa = stringa.split('');
    arrayStringa.splice(posizione);
    return arrayStringa.join('');
}

console.log(removeChar(inputString, inputPosition));


// ESERCIZIO 3 //

// Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100
//Ritorna true se le condizioni sono vere, altrimenti ritorna false

function numeberControl(numero1, numero2) {
    if (
        numero1 >= 40 && numero1 <= 60 || numero1 >= 70 && numero1 <= 100 
        && numero2 >= 40 && numero2 <= 60 || numero2 >= 70 && numero2 <= 100
        ) {
        return true
    } else {
        return false
    }
}

console.log(numeberControl(40, 70));


// ESERCIZIO 4 //

// Crea una funzione che accetti un nome di città come parametro e ritorni il suo nome se inizia con
// Los o New, altrimenti ritorni false

function cityName(name) {
    if (name.startsWith('Los') || name.startsWith('New')) {
        return name;
    } else {
        return false;
    }
}

console.log(cityName('New York'));


// ESERCIZIO 5 //

// Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array
// L'array deve essere passato come parametro

let array = [1, 2, 3, 4];

function sommaValoriArray() {
    let somma = 0;
    array.forEach(number => {
        // console.log(number);
        somma += number;
    });
    return somma;
}

console.log(sommaValoriArray());


// ESERCIZIO 6 //

// Crea una funzione che controlli che un array NON contenga i numeri 1 o 3,
// Se non li contiene ritorna true, altrimenti false

let arrayDiNumeri = [1, 4, 6];

function ricercaValore() {
    if (!(arrayDiNumeri.includes(1)) && (!(arrayDiNumeri.includes(3)))) {
        return true;
    } else {
        return false;
    }
}

console.log(ricercaValore());


// ESERCIZIO 7 //

// Crea una funzione per trovare il tipo di angolo i cui gradi
// sono passati come parametro
// Agolo acuto: meno di 90 ritorna 'acuto'
// Agolo ottuso: tra i 90 e i 180 ritorna 'ottuso'
// Agolo retto: 90 ritorna 'retto'
// Agolo piatto: 180 ritorna 'piatto'

let angolo = parseInt(prompt("Inserisci l'angolo"));

function ricercaAngolo(gradi) {

    if (gradi < 90) {
        return "L'angolo scelto è acuto";

    } else if (gradi === 90) {
        return "L'angolo scelto è retto";

    } else if ((gradi >= 90) || (gradi <= 180)) {
        return "L'angolo scelto è ottuso";

    } else if (gradi === 180) {
        return "L'angolo scelto è piatto";

    } else {
        return "L'angolo scelto non è valido";
    }
}

console.log(ricercaAngolo(angolo));


// ESERCIZIO 8 //

// Crea una funzione che crei un acronimo a partire da una frase
// Es Fabbrica Italiana Automobili Torino, deve ritornare FIAT

let frase = 'Fabbrica Italiana Automobili Torino';

function selectionChar(frase) {

    let parolaSingola = frase.split(' ');
    let paroleIniziali = '';

    for (let i = 0; i < parolaSingola.length; i++) {
        paroleIniziali += parolaSingola[i].charAt(0);        
    }

    return paroleIniziali;
}

let paroleIniziali = selectionChar(frase);
console.log(paroleIniziali);