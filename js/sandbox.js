// function fizzBuzz(num) {
//     for(var i = 1; i <= num; i++) {
//         if (i % 3 === 0) {
//             console.log("fizz");
//         } if (i % 5 === 0) {
//             console.log("buzz");
//         } if (i % 15 === 0) {
//             console.log("fizzbuzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
//
// console.log(fizzBuzz(30));

// var bugs = ["bee", "fly", "wasp", "dragonfly", "ladybug", "spider"];
//
// var colors = ["red", "blue", "green", "violet", "indigo", "orange"];
//
// console.log(colors);
//
// console.log("Reversing the colors array.");
//
// colors.reverse();
//
// console.log(colors);
//
// colors.pop();
//
// console.log(colors);
//
// colors.sort;
//
// console.log(colors);
//
// colors.splice(0,1);
//  console.log(colors);
//

// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
//
// var allIndexesOf = function (arr, value) {
//     var indexes = [], i = -1;
//     while ((i = arr.indexOf(value, i + 1)) != -1){
//      indexes.push(i);
//     }
//     return indexes;
//
// }
//
// console.log(allIndexesOf(bugs, "ant"));



function findLongWord (string) {
    var longest = 0;
    var word = string.split(" ");
    for (var i = 0; i < word.length; i++) {
        if (word[i].length > longest){
            longest = word[i].length
            }
    }

    return longest;
}

console.log(findLongWord("The colors of the rainbow are a vast array"));

var car = {
    make: "Ford",
    model: "GT40",
    year: 1968
}