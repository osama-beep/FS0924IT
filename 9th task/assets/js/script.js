
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

//extra

//esercizio 1

function checkArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            somma += array[i];
            console.log(array[i] + " è maggiore di 5");
        } else {
            console.log(array[i] + " è minore di 5");
        }
    }
    return somma + " è la somma dei numeri maggiori di 5";
}

console.log(checkArray(giveMeRandom(10)));

//esercizio 2

function shoppingCartTotal(shoppingCart) {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return "Il totale del carrello è"+ ' ' + total + '€';
}


const shoppingCart = [
    { price: 299.99, name: 'AirPods', id: 1, quantity: 2 },
    { price: 2.99, name: 'Sprite', id: 2, quantity: 3 },
    { price: 1599.99, name: 'Iphone 16', id: 3, quantity: 1 }
];

console.log(shoppingCartTotal(shoppingCart)); 

//esercizio 3

function addItemsToItem(shoppingCart, itemId, numItemsToAdd) {
    const item = shoppingCart.find(item => item.id === itemId);

    return item.quantity += numItemsToAdd;

}


const updatedShoppingCart = addItemsToItem(shoppingCart, 1, 12);
console.log(updatedShoppingCart);

//esercizio 4

function latestShoppingCart(shoppingCart) {
    return shoppingCart[shoppingCart.length - 1];
}


const latestItem = latestShoppingCart(shoppingCart);
console.log(latestItem);

//esercizio 5

//work in progress//

//esercizio 6

function average(array) {

let sum = 0;
let count = 0;

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
    sum += array[i];
    count++;
    }
}

if (count === 0) {
    return 0;
}
return sum / count;
}

const numbers = [1, 9];
console.log(average(numbers));

//esercizio 8















