console.log('JS OK');


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 (FORM);
// Generiamo un numero random (da 1 a 5) per il computer (FUNZIONE);
// Sommiamo i due numeri;
// Stabiliamo se la somma dei due numeri è pari o dispari (FUNZIONE);
// Dichiariamo chi ha vinto.



// Funzione per generare numero random per il computer 

function getRandomNumber(min, max) {
    max++; 

    const randomNumber = Math.floor(Math.random() * (max - min)) + min; 
    return randomNumber;
}

// Funzione per stabilire se la somma è pari o dispari

function isEven(value) {
    return value % 2 === 0;
} 


// Recupero elementi dal form 

const enter = document.getElementById('enter');
const evenOdd = document.getElementById('evenodd');

const result = document.getElementById('result');


// Collego event listener al button 

enter.addEventListener("click", function() {

    // Recupero dati dal form

    const userChoice = evenOdd.value;


    let numberFromUser = parseInt(document.getElementById('numberFromUser').value);

    if (isNaN(numberFromUser) || numberFromUser > 5 || numberFromUser < 1){
        alert("Inserisci un numero da 1 a 5");
        return;
    }

    if (!userChoice || (userChoice !== 'even' && userChoice !== 'odd')){
        alert("La scelta inserita non è valida");
        return;
    }


    const cpuNumber = parseInt(getRandomNumber(1, 5));
    console.log(cpuNumber);

    //Somma del numero user e cpu

    const sum = parseInt(numberFromUser + cpuNumber); 

    console.log(sum);


    // Stabilisco la scelta vincente 

    const winnerChoice = isEven(sum) ? 'even' : 'odd';

    // Stabilisco il vincitore 

    const winner = userChoice === winnerChoice ? 'Hai vinto!' : 'Ha vinto il computer';


    // Stampo il risultato in pagina 

    result.innerText = winner;


})
