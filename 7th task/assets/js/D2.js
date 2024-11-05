/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = 83;
let numero2 = 30;


if (numero1 > numero2) {
  console.log(numero1 + " è il numero maggiore.");
} else {
  console.log(numero2 + " è il numero maggiore.");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numero3 = 9;

if (numero3 !==5) {
  console.log ("not equal");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numero4 = 50;

if (numero4 % 5 === 0) {
  console.log ("Il numero è divisibile per 5");
} else {
  console.log ("Il numero non è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero5 = 38;
let numero6 = 30;

if (numero5 === 8 || numero6 === 8 || numero5 + numero6 === 8 || numero5 - numero6 === 8) {
  console.log("Un numero è 8 oppure la loro somma/sottrazione equivale ad 8");
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 67

const shippingCost = 10

let totalToPay;

if (totalShoppingCart > 50) {
  totalToPay = totalShoppingCart;

} else {
  totalToPay = totalShoppingCart + shippingCost;
}
console.log ("Totale da pagare", totalToPay);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const discountPercentage = 20;

let discountAmount  = totalShoppingCart *(discountPercentage / 100);

let discountedTotal = totalShoppingCart - discountAmount;

totalToPay;
if (discountedTotal > 50) {
  totalToPay = discountedTotal;
} else {
  totalToPay = discountedTotal + shippingCost;
}

console.log("Totale da pagare:", totalToPay)


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let numero7 = 3
let numero8 = 34286
let numero9 = 345

let numeri = [numero7, numero8, numero9];

numeri.sort((a,b) => b - a)

numero7 = numeri[0]
numero8 = numeri[1]
numero9 = numeri[2]

console.log ("Ordine decrescente", numero7, numero8, numero9);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let daVerificare = "Ciao";

let tipologia = typeof daVerificare;

if (tipologia === "number") {
  console.log("è un numero");
} else {
  console.log("non è un numero");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero10 = 34

if (numero10 % 2 === 0){
  console.log("è pari");
} else {
  console.log ("è dispari");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;

if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Tra 5 e 10 (compreso)");
} else {
    console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log (me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills = ['javascript', 'html']

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numbers = Array.from({length: 10}, (_, index) => index + 1);
console.log(numbers); 

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers[numbers.length - 1] = 100
console.log (numbers)
