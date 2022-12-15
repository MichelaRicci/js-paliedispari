console.log('JS OK');


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 (FORM);
// Generiamo un numero random (da 1 a 5) per il computer (FUNZIONE);
// Sommiamo i due numeri;
// Stabiliamo se la somma dei due numeri è pari o dispari (FUNZIONE);
// Dichiariamo chi ha vinto.


// Recupero elementi dal form 

const enter = document.getElementById('enter');


// Collego event listener al button 

enter.addEventListener("click", function() {

    // Recupero dati dal form

    const evenOdd = document.getElementById('evenodd').value;

    const numberFromUser = document.getElementById('numberFromUser').value;

    if (numberFromUser > 5){
        alert
    }
})




// Genero numero random per il computer

function getRandomNumber(min, max) {
    max++; 

    const randomNumber = Math.floor(Math.random() * (max - min)) + min; 
    return randomNumber;
}

const cpuNumber = getRandomNumber(1, 5);
console.log(cpuNumber);
