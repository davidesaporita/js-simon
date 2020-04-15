/**
 *  SIMON SAYS
 * 
 *  Un alert espone 5 numeri casuali (univoci). 
 *  Da li parte un timer di 30 secondi.
 *  Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
 *  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
 *  Assicuratevi di saper fare correttamente l’ esercizio con output base (alert() , prompt() , console.log() )
 * 
 * 
 */
var level = 5;
var rangeMin = 1;
var rangeMax = 100;

var numbers = getRandomInt(level, rangeMin, rangeMax);
alert('Ricorda questi numeri:\n' + numbers);



setTimeout(function() {
    alert('Te li ricordi?');
    var temp = 0;
    var arrayUser = [];
    for ( i = 0; i < level ; i++ ){
        while ( temp == 0 || isNaN(temp) ) {
            temp = parseInt(prompt('Inserisci il ' + (i+1) + '° numero che ricordi '));
        } 
        arrayUser.push(temp);
        temp = 0;
    }
    console.log('I dati da te inseriti sono: ' + arrayUser);
    console.log('I numeri da ricordare erano: ' + numbers);
    
},2000);


function getRandomInt(x = 5, min = 1, max = 100) { // x --> quanti numeri generare (max 100) | min & max --> range 
    var array = [];
    var temp = 0;
    var check = false;
    var range = max - min;

    if (x > 0 && x <= 100 && min > 0 && range >= x-1) {
        check = true;
    } else {
        check = false;
    }

    if ( check ) {        
        while ( array.length < x ) {
            temp = Math.floor(Math.random() * (range +1 )) + min;
            if ( !array.includes(temp) ) {
                array.push(temp);
            }
        }
        return array;
    } else {
        return false;
    }
}