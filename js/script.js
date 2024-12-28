let inputWord = prompt("Inserisci una parola!");

function palindromicWord(word){
    word = word.toLowerCase();//Rende la parola minuscola  
    let arrayWord = word.split("");//Trasforma la stringa in array  
    let arrayReverseWord =  arrayWord.toReversed();//Crea una copia dell'array invertito  
    let reverseWord = arrayReverseWord.join("");//Trasforma l'array invertito in stringa 

    if(word === reverseWord){
        alert("Parola Palindroma");
    }else{
        alert("Parola Non Palindroma");
    }
}
palindromicWord(inputWord);


let inputChoose = prompt("Scegli pari o dispari");

inputChoose = inputChoose.toLowerCase();//Messo fuori dallo scope della funzione chooseEvenOdd in modo da poterlo utlizzare nell' if nella funzione evenOdd
const even = "pari";
const odd = "dispari";

function chooseEvenOdd(choose){
    if(choose !== even && choose !== odd){//effettua controllo, se i valori sono diversi da even e odd restituisce alert
        alert("Valore non corretto, Riprovare!")
        location.reload();//todo Funziona solo se utilizzo questa funzione commentando le altre funzioni...Come posso far ricaricare la pagina senza che venga eseguita la funzione successiva??
        return;//Anche se non c'è altro codice dopo, il return VA MESSO perchè altrimenti il flusso di esecuzione non si ferma
    }
}
chooseEvenOdd(inputChoose);


let inputNumber = prompt ("Inserisci un numero da 1 a 5");

function evenOdd(number){
    number = parseInt(number);//Trasforma il numero inserito da string a number
    if(number < 1 || number > 5){//Controlla se il numero è al di fuori del range da 1 a 5
        alert("Numero non corretto, Riprovare!")//alert se il num in input è minore di 1 o maggiore di 5
        location.reload();//todo Qui funziona perchè è l'ultima funzione che viene eseguita
        return;//In questo caso il return serve perchè ferma l'esecuzione del codice successivo
    }else{
        let randomNumber = Math.floor(Math.random()*5)+1;//math.random genera un num da 0 a 0,9999, math.floor arrotonda per difetto quindi moltiplicando * 5 avrò un range da 0 a 4, col +1 porto il range da 1 a 5      
        let somma = number + randomNumber;//Esegue la somma tra il numero dato in input e quello generato automaticamente
        if(somma % 2 === 0){//Controlla se il numero è pari o dispari
            somma = even;
        }else{
            somma = odd;
        }
        if(somma === inputChoose){// Confronta il risultato con la scelta dell'utente
            alert("CONGRATULAZIONI, HAI VINTO!!!");
        }else{
            alert("MI DISPIACE, HAI PERSO...");
        }
    }
/*  INVERTITA LOGICA DI CONTROLLO
    if(number >= 1 && number <= 5){
        let randomNumber = Math.floor(Math.random()*5)+1;//math.random genera un num da 0 a 0,9999, math.floor arrotonda per difetto quindi moltiplicando * 5 avrò un range da 0 a 4, col +1 porto il range da 1 a 5      
        let somma = number + randomNumber;//Esegue la somma tra il numero dato in input e quello generato automaticamente
        if(somma % 2 === 0){//Controlla se il numero è pari o dispari
            somma = even;
        }else{
            somma = odd;
        }
        if(somma === inputChoose){// Confronta il risultato con la scelta dell'utente
            alert("CONGRATULAZIONI, HAI VINTO!!!");
        }else{
            alert("MI DISPIACE, HAI PERSO...");
        }
    }else{
        alert("Numero non corretto, Riprovare!")//alert se il num in input è minore di 1 o maggiore di 5
        location.reload();
        return;
    } */
}
evenOdd(inputNumber);



//todo se chooseEvenOdd è uguale a evenOdd VINCO -> scelgo pari e dopo aver inserito un numero il totale esce pari
//todo                                           -> scelgo dispari e dopo aver inserito un numero il totale esce dispari

//todo se chooseEvenOdd è diverso a evenOdd PERDO -> scelgo pari e dopo aver inserito un numero il totale esce dispari
//todo                                            -> scelgo dispari e dopo aver inserito un numero il totale esce pari