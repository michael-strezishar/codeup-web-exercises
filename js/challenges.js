"use strict";
//challenge 1

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

var allIndexesOf = function (arr, value) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(value, i + 1)) !== -1){
        indexes.push(i);
    }
    return indexes;

}

console.log(allIndexesOf(bugs, "ant"));
//alt solution
function allIndexesOf2(arr, value){
    var output = [];

    arr.forEach(function(element, index){
        if(element === value){
            output.push(index);
        }
    });
return output;
}
console.log(allIndexesOf2(bugs, "ant"));

//challenge 2
var removeAll = function (arr, value) {
    return arr.filter(function(element){
        return element !== value;
    });
}

console.log(removeAll(fruits, "banana"));

//challenge 0

var allOccurances = function (arr, value) {
   var count = 0;
    arr.forEach(function(element) {
        if(element === value){
           count++;
        }
    });
    return count;
}

console.log(allOccurances(fruits, "apple"));