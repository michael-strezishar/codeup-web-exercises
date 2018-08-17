function fizzBuzz(num) {
    for(var i = 1; i <= num; i++) {
        if(i % 10 === 0 && i % 30 ===0){
            console.log("FizzBuzz");
        } else if (i % 6 === 0){
            console.log("Fizz");
        } else if (i % 8 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
//
console.log(fizzBuzz(100));

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
};

function countRepeating (word){
    var mostRepititions = 0;

    for(var i = 0; i<word.length; i++) {
        var repititions = 1;
        for (var j = i+1; j < word.length; j++) {
            if (i != j && word[i].toLowerCase() === word[j].toLowerCase())
                repititions++;
        }
        }
        if (repititions > mostRepititions) {
            mostRepititions = repititions;

        }
    return mostRepititions;
}

console.log(countRepeating("arararaaaa"));


function increment(x) {
    var larry = 6;
    return x + (1 * larry);
}

console.log(increment(4));

function shout(message){
    alert(message.toUpperCase() + "!!!");
}
var returnIt = shout("hey man");
console.log(returnIt);