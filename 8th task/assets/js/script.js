const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

// ESERCIZIO 1
const charactersNames = [];

// ESERCIZIO 2
for (let i = 0; i < starWarsCharacters.length; i++) {
  charactersNames.push(starWarsCharacters[i].name);
}

console.log(charactersNames);

// ESERCIZIO 3
const femaleCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    femaleCharacters.push(starWarsCharacters[i]);
  }
}

console.log(femaleCharacters);

// ESERCIZIO 4
const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": [],
};

console.log(eyeColor);

// ESERCIZIO 5
for (let i = 0; i < starWarsCharacters.length; i++) {
  const character = starWarsCharacters[i];

  switch (character.eye_color) {
    case "blue":
      eyeColor.blue.push(character);
      break;
    case "yellow":
      eyeColor.yellow.push(character);
      break;
    case "brown":
      eyeColor.brown.push(character);
      break;
    case "red":
      eyeColor.red.push(character);
      break;
    case "blue-gray":
      eyeColor["blue-gray"].push(character);
      break;
    default:
      console.log(
        `Colore degli occhi non trovato per ${character.name}: ${character.eye_color}`
      );
  }
}

console.log(eyeColor);

// ESERCIZIO 6
let crewMass = 0;
let i = 0;

while (i < starWarsCharacters.length) {
  crewMass += starWarsCharacters[i].mass;
  i++;
}

console.log(crewMass);

// ESERCIZIO 7
if (crewMass < 500) {
  console.log("Ship is under loaded");
} else if (crewMass >= 500 && crewMass < 700) {
  console.log("Ship is half loaded");
} else if (crewMass >= 700 && crewMass < 900) {
  console.log("Warning: Load is over 700");
} else if (crewMass >= 900 && crewMass < 1000) {
  console.log("Critical Load: Over 900");
} else if (crewMass >= 1000) {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
}

// ESERCIZIO 8
for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot";
  }
}

console.log(starWarsCharacters);

// ESERCIZIO 9

console.log("Lunghezza prima:", charactersNames.length);

for (let i = 0; i < femaleCharacters.length; i++) {
  const femaleName = femaleCharacters[i].name;

  const index = charactersNames.indexOf(femaleName);

  if (index !== -1) {
    charactersNames.splice(index, 1);
  }
}

console.log("Lunghezza dopo:", charactersNames.length);

//  ESERCIZIO 10

const randomIndex = Math.floor(Math.random() * starWarsCharacters.length);
const randomCharacter = starWarsCharacters[randomIndex];

console.log(`Oggi vi parlerò di ${randomCharacter.name}.`);
console.log(
  `${randomCharacter.name} è un personaggio che ha ${randomCharacter.height} cm di altezza e pesa circa ${randomCharacter.mass} kg.`
);
console.log(
  `Il suo colore degli occhi è ${randomCharacter.eye_color}, mentre la sua pelle è di colore ${randomCharacter.skin_color}.`
);
console.log(
  `È nato nell'anno ${randomCharacter.birth_year}, il che lo rende un personaggio importante nella storia di Star Wars.`
);
console.log(
  `Infine, ${randomCharacter.name} è di sesso ${randomCharacter.gender}.`
);
