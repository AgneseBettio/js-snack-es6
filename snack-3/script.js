// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usiamo i nuovi metodi degli array foreach o filter.
const numbers = [2, 34, 15, 65, 56, 38, 52];
// function indexInbetween(array, startIndex, endIndex) {
//     return array.filter(function (element, index) {
//         if (index >= startIndex && index <= endIndex) {
//             return true;
//         } else {
//             return false
//         }
//     });
// }
//Provo a snellirla
function indexInbetween(array, startIndex, endIndex) {
    return array.filter((element, index) => { return (index >= startIndex && index <= endIndex) });
}
console.log(indexInbetween(numbers, 1, 5));
//uso ciclo forEach
function indexForEachInBetween(array, startIndex, endIndex) {
    const numbersInNewArray = [];
    array.forEach(function (element, index) {
        if (index >= startIndex && index <= endIndex) {
            numbersInNewArray.push(element);
        }
    });
    return numbersInNewArray;
}
console.log(indexForEachInBetween(numbers, 1, 2));
//PROVO A FARE QUELLO CHE AVEVO CAPITO INZIALMENTE - RIMANDARE NUMERI COMPRESI COME VALORE FRA DUE NUMERI a e b, con a < b

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

//ero partita con una funzione normale per poi ragionare su filter/forEach
const numeri = [1, 7, 8, 9, 2, 3, 4, 5, 6];
console.log(numeri);

//  function numbersInBetween(numbersArray, number1, number2) {
//      const numbersBetweenNumbers = [];
//      const startingNumber = number1;
//      const endingNumber = number2;
//      for (let i = 0; i < numbersArray.length; i++) {
//          const value = numbersArray[i];
//          if (value >= startingNumber && value <= endingNumber) {
//              numbersBetweenNumbers.push(value);
//          }
//      }
//      return numbersBetweenNumbers;
//  }
//  console.log(numbersInBetween(numeri, 5,9));

function numbersInBetween(numbersArray, number1, number2) {
    return numbersArray.filter(function (element) {
        if (element >= number1 && element <= number2) {
            return true
        } else {
            return false
        }
    })
}
console.log(numbersInBetween(numeri, 2, 6));
function numbersForEachInBetween(numbersArray, number1, number2) {
    const numbersBetweenNumbersEachFor = [];
    numbersArray.forEach((element) => {
        if (element >= number1 && element <= number2) {
            numbersBetweenNumbersEachFor.push(element);
        }
    });
    return numbersBetweenNumbersEachFor;
}
console.log(numbersForEachInBetween(numeri, 2, 6));