
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ["Jack", "Max", "Mike", "Megan", "Larry"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
var writeOut = function (list) {
    for (var i = 0; i<list.length; i++){
        console.log(list[i]);
    }

}
writeOut(names);
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(function(name) {

    console.log("Your name is " + name + " today!");

});
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
var numbers = [1, 2, 3, 4, 5,];

numbers.forEach(function(first) {

    console.log("Here is the number " + numbers[0] + ".");
});
numbers.forEach(function(second) {
    console.log("Here is the number " + numbers[1] + ".");
    });
numbers.forEach(function(last) {


    console.log("Here is the number " + numbers[4] + ".");
    });
