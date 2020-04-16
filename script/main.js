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

// References


var level = 1;
var green = document.querySelector('.spicchio.green');
var red = document.querySelector('.spicchio.red');
var blue = document.querySelector('.spicchio.blue');
var yellow = document.querySelector('.spicchio.yellow');
var sections = document.querySelectorAll('.spicchio');

play(level);
label('LEVEL ' + level);
console.log('----------\nLivello: ' + level);

function play(level) {

    
    var combination = randomCombo(level);
    var y = 0;
    var timing = setInterval(function() {
        if( y < combination.length ) {
            switch(combination[y]) {
                case 0: flash(green, level); break;
                case 1: flash(red, level); break;
                case 2: flash(yellow, level); break;
                case 3: flash(blue, level); break;
            }    
            y++;
        } else {
            clearInterval(timing);
        }
    },500);
    newLevel = listen(combination, level);
}


function listen(combination, level) {
    var array = [];   
    green.addEventListener('click',  () => { array.push(0); flash(green, level, array, combination, true);  });
    red.addEventListener('click',    () => { array.push(1); flash(red, level, array, combination, true);    });
    yellow.addEventListener('click', () => { array.push(2); flash(yellow, level, array, combination, true); });
    blue.addEventListener('click',   () => { array.push(3); flash(blue, level, array, combination, true);   });
}

function flash(ref, level, array = [], combination = [], listening = false){
    var win = true;
    ref.classList.add('active');
    setTimeout(() => { ref.classList.remove('active'); }, 400);
    
    if(listening){
        if (array.length == level) {
            for( var i = 0; i < combination.length; i++ ) {
                if( combination[i] === array[i] ) {
                    console.log((i+1) + ' | Bravo!');
                } else {
                    console.log((i+1) + ' | Sbagliato!');
                    win = false;
                }
            }

            if(win){
                level++;
                console.log('----------\nLivello: ' + level);
                setTimeout(function(){
                    label('LEVEL ', level);
                    setTimeout(function(){
                        play(level);
                    }, 1000);
                }, 1000);
                
            } else {
                label('YOU LOSE');
                console.log('hai perso hahahahahha!');
            }
        }
    }
}

function randomCombo( x = 1 ) {
    var colors = ['r','g','b','y'];
    var combo = [];
    for( var i = 0; i < x; i++ ){
        combo.push(Math.floor(Math.random() * colors.length));
    }
    return combo;
}

function label(string, level = false) {
    if(level) {
        document.getElementById('label').innerHTML = string + level;
    } else {
        document.getElementById('label').innerHTML = string;
    }
    
}