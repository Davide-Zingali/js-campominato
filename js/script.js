// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// array inizialmente vuota
// var arrayNumeri = [];
//
// // compilazione array vuota con 16 numeri random da 1 a 100
// for (var i = 0; i < 16; i++) {
//   var randomNumeri = Math.floor(Math.random() * 100 + 1);
//   console.log('numero random: ' + randomNumeri);
//   arrayNumeri.push(randomNumeri);
// }
// console.log('composizione intera array: ' + arrayNumeri);
// console.log(arrayNumeri[0]);
// console.log(arrayNumeri[1]);

// var randomArray = [];
// for (var i = 0; i < 16; i++) {
//   var numeriRandom = Math.floor(Math.random() * 100) +1;
//   var x = true;
//   for (var j = 0; j < i; j++) {
//     if (randomArray[j] == numeriRandom) {
//     x = false;
//     }
//   }
//   if (x) {
//     randomArray[i] = numeriRandom;
//   } else {
//     console.log('numero uguale trovato');
//     i--;
//   }
// }
// console.log('log di randomA ' + randomArray);
// console.log('log di tmp ' + numeriRandom);
// console.log('log di randoma ' + randomArray);

// input singolo  prova
// var inputUtente1 = parseInt(prompt('Inserisci 16 numeri alla volta da 1 a 100'));
// arrayUtente.push(inputUtente1);
// console.log(arrayUtente);
// // richiesta input tramite prompt per 15 volte
// for (var y = 0; y < 15; y++) {
//   var inputUtente = parseInt(prompt('Inserisci 16 numeri alla volta da 1 a 100'));
//   if (inputUtente != arrayUtente[y]) {
//     console.log('controllo y ' + arrayUtente[y]);
//     arrayUtente.push(inputUtente);
//     console.log(arrayUtente);
//   } else if (inputUtente == arrayUtente[y]) {
//     alert('Non puoi inserire numeri uguali')
//   }
// }
// console.log(arrayUtente);

// // array
// var arrayUtente = [4, 6, 7, 9, 11, 34];
// console.log(arrayUtente);
// // for (var i = 0; i < 16; i++) {
// // }
// var inputUtente = parseInt(prompt('Inserisci 16 numeri alla volta da 1 a 100'));
// // var uguale = arrayUtente.includes(inputUtente);
// console.log('esiste ' + arrayUtente.includes(inputUtente));
// // if (uguale == true) {
// //   alert('numero uguale trovato');
// // }

// ---------------------------------------------------------------------------------

// input numeri generati random da pc
var arrayRandom = [];
for (var i = 0; i < 16; i++) {
  var numeriRandom = Math.floor(Math.random() * 100) + 1;
  console.log('log di numeri random: ' + numeriRandom);
  var uguale = arrayRandom.includes(numeriRandom);
  if (uguale == true) {
    alert('numero doppio trovato');
  } else {
    arrayRandom.push(numeriRandom);
  }
}
console.log(arrayRandom);

// input numeri inseriti e controllati se presenti
// var arrayUtente = [];
// for (var i = 0; i < 16; i++) {
//   var numeriUtente = parseInt(prompt('Inserisci un numero 16 numeri da 1 a 100'))
//   console.log('log di numeri random: ' + numeriUtente);
//   var uguale = arrayUtente.includes(numeriUtente);
//   if (uguale == true) {
//     alert('numero doppio trovato');
//   } else {
//     arrayUtente.push(numeriUtente);
//   }
// }

// condizione che definisce quando l'array e' inferiore a 16
// if (arrayUtente.length == 16) {
//   var componenti16 = true;
// } else {
//   componenti16 = false;
// }

// while (arrayUtente.length > 16) {
//   numeriUtente = parseInt(prompt('---------------------------------Inserisci un numero 16 numeri da 1 a 100'));
//   arrayUtente.push(numeriUtente);
// }


// var i = 0;
// while (i < 16) {
//   var numeriUtente = parseInt(prompt('Inserisci un numero 16 numeri da 1 a 100'))
//   console.log('log di numeri random: ' + numeriUtente);
//   var uguale = arrayUtente.includes(numeriUtente);
//   if (uguale == true) {
//     alert('numero doppio trovato');
//   } else {
//     arrayUtente.push(numeriUtente);
//   }
//   i++;
// }
// if (arrayUtente.length == 16) {
//   var stop = true;
// }


// ----------------------------------------
// var arrayUtente = [];
// var i = 0;
// do {
//   var numeriUtente = parseInt(prompt('Inserisci un numero 16 numeri da 1 a 100'))
//   console.log('log di numeri random: ' + numeriUtente);
//   var uguale = arrayUtente.includes(numeriUtente);
//   if (uguale == true) {
//     alert('numero doppio trovato');
//   } else {
//     arrayUtente.push(numeriUtente);
//   }
//   i++;
// } while (arrayUtente.length == 16)
//
// console.log('componenti dentro la array', arrayUtente.length);

// if (componenti16 == false) {
//   numeriUtente = parseInt(prompt('---------------------------------Inserisci un numero 16 numeri da 1 a 100'));
//   arrayUtente.push(numeriUtente);
// }


// console.log(arrayUtente);


// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// oppure gestisco qualche caso limite (es.: se utente non inserisce numeri?.. etc.)
// arricchisco un pò la mia interazione/layout
// [come sempre tutto ciò che faccio di bonus va messo i altra sottocartella del progetto]
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :stuck_out_tongue:
// E buon divertimento :bomb:
// P.S.: ricordatevi comunque che domattina ci vediamo in classe alle 10 per rispondere a domande su ciò che state facendo.
// Come detto robe tipo “come faccio questa parte” non sono domande lecite
// saranno prese in esame solo domande molto specifiche sull’uso di determinate cose di JS nell’ambito o in generale.
