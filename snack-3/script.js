// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usiamo i nuovi metodi degli array foreach o filter.

//// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numeri);
// function numbersInBetween(numbersArray, number1, number2) {
//     const numbersBetweenNumbers = [];
//     const startingNumber = number1;
//     const endingNumber = number2;
//     for (let i = 0; i < numbersArray.lenght; i++) {
//         const value = numbersArray[i];
//         if (value > startingNumber && value < endingNumber) {
//             numbersBetweenNumbers.push(value);
//             startingNumber += 1;
//         }
//     }
//     return numbersBetweenNumbers;
// }
// console.log(numbersInBetween(numeri, 3, 8));
//uso filter()
const numbers = [2, 34, 15, 65, 56];

function indexInbeetween(array, startIndex, endIndex) {
    return array.filter(function (element, index) {
        if (index >= startIndex && index <= endIndex) {
            return true;
        } else {
            return false
        }
    });
}
console.log(indexInbeetween(numbers, 1, 2));
//uso ciclo forEach
// function indexForEachInBetween();