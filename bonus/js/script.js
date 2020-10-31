// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// scelta livello di difficolta'

var inputDifficolta = prompt('Inserisci il livello di difficoltà tra: facile, medio, difficile');

// input numeri random tramite ciclo while
var arrayRandom = [];
var arrayUtente = [];
var bomba = false;
var punteggio = 0;

switch (inputDifficolta) {
  case 'difficile':
    var difficile = difficolta(50);
    console.log('Lista dei numeri casuali: ' + arrayRandom + ' Totale: ' + arrayRandom.length);
    difficile = input(34, 50);
    break;
  case 'medio':
    var medio = difficolta(80);
    console.log('Lista dei numeri casuali: ' + arrayRandom + ' Totale: ' + arrayRandom.length);
    medio = input(64, 80);
    break;
  default:
    var facile = difficolta(100);
    console.log('Lista dei numeri casuali: ' + arrayRandom + ' Totale: ' + arrayRandom.length);
    facile = input(84, 100);
    break;
}

console.log('Punteggio finale: ' + punteggio);
console.log(arrayUtente);

// funzioni adattamento input utente in base al livello di difficolta'
function input(livello, range) {
  while (arrayUtente.length < livello && bomba == false) {
    var numeroUtente = parseInt(prompt('Inserisci i tuo numeri fortunati da 1 a ' + range));
    if (arrayUtente.includes(numeroUtente) || isNaN(numeroUtente)) {
      console.log("Numero gia' inserito o non valido, riprova...");
    } else if (numeroUtente > range) {
      console.log('Ricorda che non puoi inserire numeri superiori a ' + range);
    } else {
      // condizione se trova numero bomba
      if (arrayRandom.includes(numeroUtente)) {
        console.log('Mi dispiace hai perso, prendendo una mina al seguente numero: ' + numeroUtente);
        bomba = true;
      } else {
        arrayUtente.push(numeroUtente);
        ++punteggio;
      }
    }
  }
}

// funzioni per la scelta del range dei numeri random in base alla difficolta'
function difficolta(livello) {
  while (arrayRandom.length < 16) {
    var numeriRandom = Math.floor(Math.random() * livello) + 1;
    console.log('log di numeri random: ' + numeriRandom);
  
    // controllo numeri random ripetuti
    var numeroDoppio = arrayRandom.includes(numeriRandom);
    if (numeroDoppio) {
      console.log('Numero doppio trovato e rimpiazzato');
    } else if (!numeroDoppio) {
      arrayRandom.push(numeriRandom);
    }
  }
}

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
