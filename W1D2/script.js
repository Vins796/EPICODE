/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/



/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

- String
-> Le stringhe sono tutti quei valori che son compresi tra i doppi apici ("");

- Number
-> I numeri sono per esempio i tuoi anni. io ho 27 anni e 27 è un numero;

- Boolean
-> I valori booleani corrisondono a vero e falso ed è come quando ti chiedo se è vero che hai rotto tu il vaso. Se rispkndi si è vero, se rispondi no è falso;

- Undefined
-> Se tu avessi una scatola della quale non conosci il contenuto quello si può dire valore indefinito;

- Null
-> Questo è un valore che potrebbe corrispondere a 0;

- Symbol
-> Bisonga immaginare che i symbol siano come i tuoi giocattoli preferiti. Ognuno è differente dall'altro e puoi usarli tutti insieme per giocarci. Puoi averne anche due con lo stesso nome ma saranno comunque diversi perché avranno magari una forma diversa.

- Object
-> Gli oggetti sono contenitori come per esempio la carta d'identità, al suo interno ci sono scritte delle cose he ti identificano.

*/


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

Un oggetto in javascript è un contenitore con una lista di proprietà al suo interno. 
Un oggetto nella realtà può essere una persona, all'interno del contenitore "persona" possiamo trovare proprietà come il nome, l'età ecc...  

*/


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

// SCRIVI QUI LA TUA RISPOSTA 


let numero1 = 12;
let numero2 = 20;

let somma = numero1 + numero2;

console.log(somma);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

// SCRIVI QUI LA TUA RISPOSTA 

let x = 12;

console.log(x);



/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

// SCRIVI QUI LA TUA RISPOSTA 

let name = 'Vincenzo';

console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

// SCRIVI QUI LA TUA RISPOSTA 

let number = 4;
let sottrazione = number - x;

console.log(sottrazione);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

// SCRIVI QUI LA TUA RISPOSTA 

let name1 = `john`;
let name2 = `John`;

console.log(name1 != name2);
console.log(name1.toLowerCase() == name2.toLowerCase());


/* ESERCIZIO 8 
Crea un oggetto di Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby)
*/

// SCRIVI QUI LA TUA RISPOSTA 

let obj = {
    name: `Vincenzo`,
    cognome: `Perretta`,
    hobby: `Coding`
};

console.table(obj);










