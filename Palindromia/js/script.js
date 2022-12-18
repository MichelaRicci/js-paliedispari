console.log('JS OK');

// Chiedere all’utente di inserire una parola (FORM);
// Creare una funzione per capire se la parola inserita è palindroma


// FUNCTIONS -------------------------------------------------------------

function isPalindrome(word){
    let result = false;

    let reverse = '';

    for(let i = word.length -1; i >= 0; i--) {
        reverse += word[i];
    }


    if (word === reverse) {
        result = true;
    } 

    return result;
}


// Recupero elementi dal form 

const wordInput = document.getElementById('word');
const form = document.getElementById('palindrome');

const resultPalindrome = document.getElementById('result');


form.addEventListener('submit', function(event){

    // Gestione form in JS 
    event.preventDefault();

    
    // Recupero valore dall'input 
    const word = wordInput.value.trim();
    
    // Validazione

    if(word.length < 3) {
        alert('La parola deve contenere almeno 3 caratteri');
        return;
    }


    // Creo il messaggio con ternario 

    const message = isPalindrome(word) ? 'La parola è palindroma' : 'La parola non è palindroma';


    resultPalindrome.innerText = message;

})



