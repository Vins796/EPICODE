/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

// inserisco gli utenti e faccio delle modifiche sulla proprietà isAmbassador
let marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: false,
};

let paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

let amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: true,
};


// lista prezzi, costo spedizione, specialPrice, carrello
const prices = [34, 5, 2];
const shippingCost = 50;

let specialPrice = 0.7;
let carrello = 0;


// creo array di tutti gli utenti
let users = [];
users.push(marco);
users.push(paul);
users.push(amy);


// creo array di utenti ambassador
let ambassadorUsers = [];

for (let i = 0; i < users.length; i++) {
  console.log(`${users[i].name} ${users[i].lastName}${users[i].isAmbassador ? ' è' : ' non è'} un ambassador.`);
  const utente = users[i];
  if (utente.isAmbassador) {
    // esego il push nell'array
    ambassadorUsers.push(utente);
  }  
}
console.log(ambassadorUsers); 


// creo sistema del calcolo del carrello
for (let i = 0; i < prices.length; i++) {
  let prezzo = prices[i];
  carrello += prices[i];
}
console.log(carrello);

for (let i = 0; i < users.length; i++) {
  carrello = 41;

  if (users[i].isAmbassador) {
    carrello = (carrello * specialPrice) + shippingCost;
    console.log(`Totale carrello per ${users[i].name} ${users[i].lastName} : ${carrello.toFixed(2)}€.`);
  } else {
    carrello += shippingCost;
    console.log(`Totale carrello per ${users[i].name} ${users[i].lastName} : ${carrello.toFixed(2)}€.`);
  }
  
  if (carrello > 100) {
    carrello;
    console.log(`Totale carrello per ${users[i].name} ${users[i].lastName} : ${carrello.toFixed(2)}€ senza spese di spedizione.`);
  }
}




























