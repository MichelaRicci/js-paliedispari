console.log('JS OK');

// Chiedere all’utente di inserire una parola (FORM);
// Creare una funzione per capire se la parola inserita è palindroma



// Recupero elementi dal form 

const word = document.getElementById('word');


// Funzione per definire la parola al contrario 

function reverseWord(word){
    let reverse = '';

    for(let i = word.length -1; i >= 0; i--) {
        reverse += word[i];
    }

    return reverse;

}

const reversedWord = reverseWord(word);

console.log(reversedWord);


if (word === reversedWord) {
    console.log('parola palindroma')
} else {
    console.log('parola non palindroma')
}
