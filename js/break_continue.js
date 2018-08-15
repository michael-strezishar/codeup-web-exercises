"use strict";
//
// function isNumeric(n) {
//     return !isNaN(parseFloat(n));
// }
//
// function isOdd(n) {
//     return n % 2 !== 0;
// }
//
// var userNumber;
//
// do {
//     userNumber = prompt("Please input an odd number between 1 and 50.");
//
//     if (isOdd(userNumber) && isNumeric(userNumber) && userNumber >= 1 && userNumber <= 50) {
//         break;
//     }
// } while(true);
//
// for(var i = 1; i <= 50; i +=2) {
//     if(i === userNumber) {
//         console.log("Yikes! Skipping number: " + userNumber);
//         continue;
//     }
//     console.log("Here's an odd number " + i);
// }


// function fizzBuzz(num) {
//     for(var i = 1; i <= num; i++) {
//
//         if (i % 15 === 0) {
//             console.log("fizzbuzz");
//         }
//
//         if (i % 3 === 0) {
//             console.log("fizz");
//         }
//         if (i % 5 === 0) {
//             console.log("buzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }


var writeOut = function (str){
    for (var i = 0; i<str.length; i++){
        console.log(str[i]);
    }
}
var cars = ["Lamorghini", "Ferrari", "Koenigsegg", "Bugatti", "Ford", "Chevrolet", "Dusenberg"]
writeOut(cars);