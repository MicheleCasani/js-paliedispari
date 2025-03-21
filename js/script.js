//ESERCIZIO 1:
//Palindroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//dichiaro la variabile dove l'utente scriverà la sua parola
let userText = prompt('inserisci la parola desiderata');
//creo la funzione che determina se la parola inserita è palindromaciao
function palindroma(text) {
    let lowerRevers = text.toLowerCase();
    let textRevers = (lowerRevers.split('').reverse().join(''));

    if (text === textRevers) {
        console.log('la parola è palindroma')
    }

    else {
        console.log(' la parola non è palindroma')
    }
}
palindroma(userText);

//ESERCIZIO 2
//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

function generator() {
    return Math.floor(Math.random() * 5) + 1;
}

function isPari(a, b) {
    let sum = a + b;
    let even = false;
    if (sum % 2 === 0) {
        even = true
    }

    return even

}

let choiceUser = prompt('Scegli pari o dispari').toLowerCase
let numberUser = parseInt(prompt('inserisci un numero da 1 a 5'))
let numberPc = generator();
console.log(numberUser)
console.log(numberPc)

let result;

if (isPari(numberUser, numberPc)) {
    result = 'pari';
}
else {
    result = 'dispari';
}


if(choiceUser === result)
    console.log('Hai vinto!')

else{
    console.log('Hai perso!')
}