let inputWord = document.querySelector("#palindrome-input");
const submitPalindrome = document.querySelector("#palindrome-button");
let resultPalindrome = document.querySelector("#palindrome-result");

submitPalindrome.addEventListener("click", function(event){
    event.preventDefault();

    let wordInput = inputWord.value;// Ottengo il valore dell'input
    function palindromicWord(word){
        word = word.toLowerCase();//Rende la parola minuscola  
        let arrayWord = word.split("");//Trasforma la stringa in array  
        let arrayReverseWord =  arrayWord.reverse();//Crea una copia dell'array invertito  
        let reverseWord = arrayReverseWord.join("");//Trasforma l'array invertito in stringa 
        
        if (!wordInput) {//controllo se l'utente non inserisce nulla(! viene usato per verificare se la variabile è "FALSY",se la stringa è vuota viene considerata "FALSY"...Quindi se l'utente non scrive nulla la condizione è VERA)
            resultPalindrome.innerHTML = "Per favore inserisci una parola e riprova!";
            setTimeout(function() {
                resultPalindrome.innerHTML = ""; // Pulisce il messaggio di errore dopo 3 secondi
            }, 3000);
            return;
        }else if(word === reverseWord){
            resultPalindrome.innerHTML = "Complimenti, la parola inserita è Palindroma!";
        }else{
            resultPalindrome.innerHTML = "Mi dispiace, la parola inserita Non è Palindroma";
        }
    }
    palindromicWord(wordInput);
})

let inputSelect = document.querySelector("#even-odd-select");
let inputNumber = document.querySelector("#even-odd-input");
const submitEvenOdd = document.querySelector("#even-odd-button");
let resultEvenOdd = document.querySelector("#even-odd-result");

submitEvenOdd.addEventListener("click", function(event){
    event.preventDefault();

    let selectInput =inputSelect.value;//Ottengo il valore dell'input
    let numberInput =inputNumber.value;//Ottengo il valore dell'input
    
    function evenOdd(number){
        if(selectInput !=0 && selectInput !=1){
            resultEvenOdd.innerHTML = "Per favore effettua una scelta!";
            setTimeout(function() {
                resultEvenOdd.innerHTML = ""; // Pulisce il messaggio dopo 3 secondi
            }, 3000);
            return;
        }
        
        number = parseInt(number);//Trasforma il numero inserito da string a number
        if(isNaN(number) || number < 1 || number > 5){//Controlla se il numero è al di fuori del range da 1 a 5 e se è stato inserito accidentalmente un carattere/parola 
            resultEvenOdd.innerHTML = "Valore non corretto, Riprovare!";//alert se il num in input è minore di 1 o maggiore di 5
            setTimeout(function() {
                resultEvenOdd.innerHTML = ""; // Pulisce il messaggio dopo 3 secondi
            }, 3000);
            return;//In questo caso il return serve perchè ferma l'esecuzione del codice successivo
        }else{
            let randomNumber = Math.floor(Math.random()*5)+1;//math.random genera un num da 0 a 0,9999, math.floor arrotonda per difetto quindi moltiplicando * 5 avrò un range da 0 a 4, col +1 porto il range da 1 a 5      
            let somma = number + randomNumber;//Esegue la somma tra il numero dato in input e quello generato automaticamente
            if(somma % 2 === 0){//Controlla se il numero è pari o dispari
                somma = 0;
            }else{
                somma = 1;
            }
            
            if(somma == selectInput){//Confronta il risultato con la scelta dell'utente fatta nel select
                                     //todo Ho fatto la comparazione con 2 = invece di 3 perchè sono di tipo differente(somma->number, selectImput->string) anche se il valore è lo stesso
                resultEvenOdd.innerHTML = "CONGRATULAZIONI, HAI VINTO!!!";
            }else{
                resultEvenOdd.innerHTML = "MI DISPIACE, HAI PERSO...";
            }
        }
    }
    evenOdd(numberInput);
})

//todo Se metto un seTimeout su ogni "result" è meglio creare una funzione invece di ripeterlo n volte?