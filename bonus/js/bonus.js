let inputWord = document.querySelector("#palindrome-input");
const submitPalindrome = document.querySelector("#palindrome-button");
let resultPalindrome = document.querySelector("#palindrome-result");

submitPalindrome.addEventListener("click", function(event){
    event.preventDefault();

    let wordInput = inputWord.value;// Ottiengo il valore dell'input
    function palindromicWord(word){
        word = word.toLowerCase();//Rende la parola minuscola  
        let arrayWord = word.split("");//Trasforma la stringa in array  
        let arrayReverseWord =  arrayWord.reverse();//Crea una copia dell'array invertito  
        let reverseWord = arrayReverseWord.join("");//Trasforma l'array invertito in stringa 
        
        if (!wordInput) {//controllo se l'utente non inserisce nulla(! viene usato per verificare se la variabile è "FALSY",se la stringa è vuota viene considerata "FALSY"...Quindi se l'utente non scrive nulla la condizione è VERA)
            resultPalindrome.innerHTML = "Per favore inserisci una parola e riprova!";
            return;
        }else if(word === reverseWord){
            resultPalindrome.innerHTML = "Complimenti, la parola inserita è Palindroma!";
        }else{
            resultPalindrome.innerHTML = "Mi dispiace, la parola inserita Non è Palindroma";
        }
    }
    palindromicWord(wordInput);
})