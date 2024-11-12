//esercizio 1

function concatenaEConverti(stringa1, stringa2) {
  const primaParte = stringa1.slice(0, 2);
  const secondaParte = stringa2.slice(-3);
  const risultato = (primaParte + secondaParte).toUpperCase();
  console.log(risultato);
  return risultato;
}

//esercizio 2

concatenaEConverti("JavaScript", "Programmazione");
function randomValue() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 101);
    array.push(randomNum);
  }
  return array;
}

console.log(randomValue());

//esercizio 3

function pari(array) {
  const pariArray = array.filter((num) => num % 2 === 0);
  return pariArray;
}

console.log(
  pari([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30,
    40, 50, 60, 70, 80, 90, 100,
  ])
);

//esercizio 4

function somma(array) {
  let sommaNumeri = 0;
  array.forEach((num) => {
    sommaNumeri += num;
  });
  return sommaNumeri;
}

console.log(
  somma([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30,
    40, 50, 60, 70,
  ])
);

//esercizio 5

function sommaReduce(array) {
  return array.reduce((acc, num) => acc + num, 0);
}
console.log(
  sommaReduce([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30,
    40, 50, 60,
  ])
);

//esercizio 6

function incrementaArray(array, n) {
  return array.map((numero) => numero ** n);
}

const arrayOriginale = [1, 2, 3, 4, 5];
const incremento = 4;
const arrayIncrementato = incrementaArray(arrayOriginale, incremento);

console.log("Array originale:", arrayOriginale);
console.log("Array incrementato di", incremento, ":", arrayIncrementato);

//esercizio 7

function contaLunghezza(array) {
  return array.map((stringa) => stringa.length);
}

const arrayStringhe = ["JavaScript", "Programmazione", "Esercizi", "Epicode"];
console.log(contaLunghezza(arrayStringhe));

//esercizio 8

function valoriDispari() {
  const arrayDispari = [];
  for (let i = 1; i <= 99; i += 2) {
    arrayDispari.push(i);
  }
  return arrayDispari;
}

console.log(valoriDispari());

//esercizio 9

function filmVecchio() {
  let filmPiuVecchio = movies[0];

  movies.forEach((film) => {
    if (parseInt(film.Year) < parseInt(filmPiuVecchio.Year)) {
      filmPiuVecchio = film;
    }
  });

  return filmPiuVecchio;
}
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
const filmPiuVecchio = filmVecchio();
console.log(
  "Il film più vecchio è:",
  filmPiuVecchio.Title,
  "dell'anno",
  filmPiuVecchio.Year
);

//esercizio 10

function numeroFilm() {
  return movies.length;
}

console.log("Il numero totale di film è:", numeroFilm());

//esercizio 11

function titoliFilm() {
  return movies.map((film) => film.Title);
}

console.log("I titoli dei film sono:", titoliFilm());

//esercizio 12

function filmLastMillennium() {
  return movies.filter((film) => film.Year > 1999);
}

console.log("I film usciti nel millennio corrente sono:", filmLastMillennium());

//esercizio 13

function sommaAnni() {
  return movies.reduce((somma, film) => somma + film.Year);
}

console.log("La somma degli anni di tutti i film dati è:", sommaAnni());

//esercizio 14

function cercaFilm(id) {
  return movies.find((film) => film.imdbID === id);
}

console.log(
  "Il film con l'imdbID",
  cercaFilm("tt0848228").imdbID,
  "è:",
  cercaFilm("tt0848228").Title
);

//esercizio 15

function trovaIndicePrimoFilm(anno) {
  return movies.findIndex((film) => film.Year === anno.toString());
}

console.log(
  "L'indice del primo film uscito nell'anno",
  trovaIndicePrimoFilm(2005),
  "è:",
  movies[trovaIndicePrimoFilm(2005)].Title
);
