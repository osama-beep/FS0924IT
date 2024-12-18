/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const petsAlphabetic = [...pets].sort();
console.log("Pets in alphabetic order: ", petsAlphabetic);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const petsReverse = [...pets].reverse();
console.log("Pets in reverse order: ", petsReverse);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const petsReordered = [...pets];
const firstPet = petsReordered.shift();
petsReordered.push(firstPet);
console.log("Pets after re-ordering: ", petsReordered);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const carsAddLicensePlate = cars.map((car) => {
  return {
    ...car,
    licensePlate: generateLicensePlate(),
  };
});

console.log("Cars with license plates:", carsAddLicensePlate);

function generateLicensePlate() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let plate = "";

  for (let i = 0; i < 2; i++) {
    plate += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  for (let i = 0; i < 3; i++) {
    plate += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  for (let i = 0; i < 2; i++) {
    plate += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return plate;
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const carsWithNewCar = [...cars];
const newCar = {
  brand: "Porsche",
  model: "918 GT3 RS",
  color: "white",
  trims: ["luxury", "rs", "fast"],
};

carsWithNewCar.push(newCar);
console.log("Cars with the new car: ", carsWithNewCar);

const carsNoLastTrims = carsWithNewCar.map((car) => {
  const trimmedCar = { ...car, trims: [...car.trims] };

  trimmedCar.trims.pop();

  return trimmedCar;
});

console.log("Cars without the last trims: ", carsNoLastTrims);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = (car) => car.trims[0];

console.log("First trims of each car: ", carsNoLastTrims.map(justTrims));

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

const fizzBuzz = [...carsWithNewCar].map((car) => {
  if (car.color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
});

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

console.log("Inizio del while");

let i = 0;
while (i < numericArray.length && numericArray[i] !== 66) {
  console.log(numericArray[i]);
  i++;
}

console.log("fine del while al 32");

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ["g", "n", "u", "z", "d"];

const switchArray = charactersArray.map((character) => {
  switch (character.toLowerCase()) {
    case "a":
      return 1;
    case "b":
      return 2;
    case "c":
      return 3;
    case "d":
      return 4;
    case "e":
      return 5;
    case "f":
      return 6;
    case "g":
      return 7;
    case "h":
      return 8;
    case "i":
      return 9;
    case "l":
      return 10;
    case "m":
      return 11;
    case "n":
      return 12;
    case "o":
      return 13;
    case "p":
      return 14;
    case "q":
      return 15;
    case "r":
      return 16;
    case "s":
      return 17;
    case "t":
      return 18;
    case "u":
      return 19;
    case "v":
      return 20;
    case "z":
      return 21;
  }
});

console.log("lettere numerate:", switchArray);
