
//esercizio 1
function area (l1, l2) {
return l1 * l2;
}

console.log(area(5, 6));

//esercizio 2

function crazySum (numero1, numero2) {

    if (numero1 === numero2) {
        return  (numero1 + numero2) * 3;
    } else {
        return numero1 + numero2;
    }

}
 
console.log(crazySum(1, 1));

//esercizio 3

//esercizio 3

function crazyDiff (numero3) {
    const diffAssoluta = Math.abs(numero3 - 19);

    if (numero3 > 19) {
        return diffAssoluta * 3;
        } else {
            return diffAssoluta;
        }
    }

    console.log(crazyDiff(90));


    //esercizio 4

    function boundary (numero4) {

return numero4 >= 20 && numero4 <= 100 || numero4 === 400;

    }

    console.log(boundary(400));

    //esercizio 5

    function epify (stringa) {

if (stringa.startsWith("EPICODE")) {
    return stringa;

    } else { 
        return "EPICODE";
    }

}

console.log(epify("EPICODE"));

//esercizio 6

function check3and7 (numero5) {

return numero5 % 3 === 0 || numero5 % 7 === 0;

}

console.log(check3and7(14));

//esercizio 7

function reverseString (parolina) {

return parolina.split("").reverse().join("");

}

console.log(reverseString("supercalifragilistichespiralidoso"));

//esercizio 8

function upperFirst(parola) {
    return parola.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(upperFirst("ciao come va?"));

//esercizio 9

function cutString (word) {

return word.slice(1, -1);

}

console.log(cutString("Napoli"));

//esercizio 10

function giveMeRandom(num) {
    return Array.from({length: num}, () => Math.floor(Math.random() * 11));
}

console.log(giveMeRandom(10));



