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


    let numberFromUser = parseInt(document.getElementById('numberFromUser').value);

    if (numberFromUser > 5 || numberFromUser < 1){
        alert("Inserisci un numero da 1 a 5");
    }

    const userNumber = parseInt(document.getElementById('numberFromUser').value);


    // Funzione per generare numero random per il computer 

    function getRandomNumber(min, max) {
        max++; 

        const randomNumber = Math.floor(Math.random() * (max - min)) + min; 
        return randomNumber;
    }

    const cpuNumber = parseInt(getRandomNumber(1, 5));
    console.log(cpuNumber);

    //Somma del numero user e cpu

    const sum = parseInt(userNumber + cpuNumber); 

    console.log(sum);

})




// Funzione per stabilire se la somma è pari o dispari







