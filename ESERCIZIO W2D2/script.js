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

// inserisco gli utenti


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


// lista prezzi, costo spedizione, specialPrice

const prices = [34, 5, 2];
const shippingCost = 50;

const specialPrice = 0.7;

// creo array di tutti gli utenti

let users = [];
users.push(marco);
users.push(paul);
users.push(amy);


// creo array  di utenti ambassador

let ambassadorUsers = [];

for (let i = 0; i < users.length; i++) {
  console.log(`${users[i].name} ${users[i].lastName}${users[i].isAmbassador ? '' : ' non'} è un ambassador`);
  if (users.isAmbassador) {
    // esego il push nell'array
    ambassadorUsers.push(users);
  }   
}


// creo sistema del calcolo del carrello

let totale = 0;
for (let i = 0; i < prices.length; i++) {
  totale += prices[i];
}

for (let i = 0; i < users.length; i++) {
  if (users[i].isAmbassador) {
    totale *= specialPrice;
    totale += shippingCost;
    console.log(`Totale carrello per ${users[i].name} ${users[i].lastName} : ${totale}€.`);
  } else {
    totale += shippingCost;
    console.log(`Totale carrello per ${users[i].name} ${users[i].lastName} : ${totale}€.`);
  }  

    // verifico se il carrello suoera i 100

    if (totale > 100) {
      totale -= shippingCost;
      console.log(`Totale carrello per ${users[i].name} ${users[i].lastName} : ${totale}€ senza spese di spedizione.`);
    } 
}



























