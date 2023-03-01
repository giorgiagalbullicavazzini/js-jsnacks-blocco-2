// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// ciclo for
// let sum = 0;

// for (let i = 0; i < 5; i++) {
//     const number = Number(prompt('Inserisci un numero'));

//     sum+= number;
//     console.log(sum);
// }

// ciclo while
let index = 0;
let sumWhile = 0;

while (index < 5) {
    const numberWhile = Number(prompt('Inserisci un numero'));

    sumWhile+= numberWhile;
    console.log(sumWhile);

    index++;
}