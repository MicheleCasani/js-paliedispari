//ESERCIZIO 1:
//Palindroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//dichiaro la variabile dove l'utente scriverà la sua parola
let userText = prompt('inserisci la parola desiderata');
    //creo la funzione che determina se la parola inserita è palindromaciao
    function palindroma(text) {
        let lowerRevers = text.toLowerCase();
        let textRevers = (lowerRevers.split('').reverse().join(''));

        if(text === textRevers){
            console.log('la parola è palindroma')
        }

        else{
            console.log(' la parola non è palindroma')
        }
    }
    palindroma(userText);