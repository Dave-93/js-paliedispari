let inputWord = prompt("Inserisci una parola!");

function palindromicWord(word){
    inputWord = inputWord.toLowerCase();//Rende la parola minuscola  
    let arrayWord = inputWord.split("");//Trasforma la stringa in array  
    let arrayReverseWord =  arrayWord.toReversed();//Crea una copia dell'array invertito  
    let reverseWord = arrayReverseWord.join("");//Trasforma l'array invertito in stringa 

    if(inputWord === reverseWord){
        alert("Parola Palindroma");
    }else{
        alert("Parola Non Palindroma");
    }
}
palindromicWord(inputWord);