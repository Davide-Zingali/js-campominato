// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// ====================================================================================

// // input numeri generati random da pc e controllati che non siano uguali
// var arrayRandom = [];
// for (var i = 0; i < 22; i++) {
//   var numeriRandom = Math.floor(Math.random() * 100) + 1;
//   console.log('log di numeri random: ' + numeriRandom);
//   var uguale = arrayRandom.includes(numeriRandom);
//   if (uguale == true) {
//     alert('numero doppio trovato');
//   } else if (uguale == false && arrayRandom.length < 16) {
//     arrayRandom.push(numeriRandom);
//   }
// }
// console.log(arrayRandom);
//
// // =======================================================================================
//
// // input numeri utente 16 volte controllando che non siano ripetuti
// var arrayUtente = [];
// for (var i = 0; i < 16; i++) {
//   var numeriUtente = parseInt(prompt('Inserisci 16 numeri da 1 a 100'));
//   console.log('log di numeri utente: ' + numeriUtente);
//   var ugualeU = arrayUtente.includes(numeriUtente);
//   if (ugualeU == true) {
//     alert('Non puoi inserire numeri uguali');
//   } else if (ugualeU == false && arrayUtente.length < 16) {
//     arrayUtente.push(numeriUtente);
//     // confronto tra Array
//     for (var z = 0; z < arrayRandom.length; z++) {
//       var ugualex = arrayRandom.includes(arrayUtente[z]);
//     }
//     console.log('Mi dispiace hai perso, hai trovato una mina' + ugualex);
//   }
// }
// console.log(arrayUtente);


var utenteArray = [];
for (var i = 0; i < 16; i++) {
  var numeriUtente = parseInt(prompt('Inserisci 16 numeri da 1 a 100'));
  var x = true;
  for (var j = 0; j < i; j++) {
    if (utenteArray[j] == numeriUtente) {
    x = false;
    }
  }
  if (x == true) {
    utenteArray[i] = numeriUtente;
  } else {
    console.log('numero uguale trovato');
    i--;
  }
}
console.log('log di arrayUtente ' + utenteArray);
console.log('log di ultimo numeriUtente ' + numeriUtente);













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
