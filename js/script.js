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

//let choose = prompt("Scegli pari o dispari");

let inputNumber = prompt ("Inserisci un numero da 1 a 5");

function evenOdd(number){
    inputNumber = parseInt(inputNumber);//Trasforma il numero inserito da string a number
    console.log(inputNumber);
    if(inputNumber >= 1 && inputNumber <= 5){
        let randomNumber = Math.floor(Math.random()*5)+1;//math.random genera un num da 0 a 0,9999, math.floor arrotonda per difetto quindi moltiplicando * 5 avrò un range da 0 a 4, col +1 porto il range da 1 a 5
        console.log(randomNumber);
        
        let somma = inputNumber + randomNumber;
        console.log(somma);
        
        if(somma % 2 === 0){
            alert("Numero Pari")
        }else{
            alert("Numero Dispari")
        }
    }else{
        alert("Numero non corretto, Riprovare!")
    }
}
evenOdd(inputNumber);