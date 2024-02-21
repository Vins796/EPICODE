/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2)* 3;
    } else {
        return (num1 + num2);
    }
}
console.log(crazySum(20, 20));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true;
    } else {
        return false;
    }
}
console.log(boundary(10));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string) {
   return string.split('').reverse('').join('')
}
console.log(reverseString('EPICODE')); 

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(stringa) {
    let parole = stringa.split(' ')
    console.log(parole);

    let fraseFinale = [];

    for (let i = 0; i < parole.length; i++) {
        let primaLettera = parole[i].charAt(0); // prende la prima lettera
        let primaLetteraMaiuscola = primaLettera.toUpperCase(); // rende la prima lettera maiuscola
        // console.log(primaLetteraMaiuscola);
        let parolaTagliata = parole[i].slice(1); // prende la parola senza il primo carattere
        // console.log(parolaTagliata);
        let paroleUnite = primaLetteraMaiuscola + parolaTagliata;
        // console.log(paroleUnite); // uniamo la maiuscola iniziale e la parte tagliata

        fraseFinale.push(paroleUnite);

        console.log(fraseFinale.join(' '));        
    }
}
upperFirst('ciao mondo');


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom() {
    
    let arrayRandom = [];
    let x = Math.floor((Math.random() * 10));
    let y = Math.floor((Math.random() * 10));
    let z = Math.floor((Math.random() * 10));

    arrayRandom.push(x, y, z);

    console.log(arrayRandom);
}

giveMeRandom();



//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1 * l2;
}
console.log(area(10, 20));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff() {

    let numeroFisso = 19;
    let numeroFornito = -100;
    let differenzaAssoluta = Math.abs(numeroFornito - numeroFisso);

    console.log(differenzaAssoluta);

    if (differenzaAssoluta > 19) {
        differenzaAssoluta *= 3;
        return differenzaAssoluta;
    }
}
console.log(crazyDiff()); 

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
