"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */



// var confirmNumber = confirm("Would you like to enter a number? ");
//
// if (confirmNumber){
//     var enterNumber = Number(prompt("Please enter a number then click OK"));
//     var addHundred = alert("This number plus 100 is " + (Number(enterNumber) + 100));
// }
// if (isNaN(enterNumber) || typeof enterNumber !== "number"); {
//     alert("Sorry, that wasn't a number. Please enter a number");
// }
//
//
// if (enterNumber % 2 == 0){
//     alert("this number is even");
// } else {
//     alert("this number is odd");
// }
//
// if (enterNumber < 0){
//     alert("the number is negative");
// } else {
//     alert("the number is positive");
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var enteredColor = prompt("please enter your favorite color");


function analyzeColor(enteredColor) {

    alert(enteredColor + " is the color you entered");

    if (enteredColor === "blue"){
        alert("blue is the color of the sky");
        console.log("i got blue");
    } else if (enteredColor === "red") {
        alert("Strawberries are red");
        console.log("i got red");
    } else if (enteredColor === "cyan") {
        alert("I don't know anything about cyan");
        console.log("i got cyan");
    } else  {
        alert("please enter an approved color");

    }
}

analyzeColor(enteredColor);



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
function colorChanger(randomColor){
    return randomColor;

}
console.log(colorChanger(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var enteredColor2 = prompt("What is your favorite color?");

switch(enteredColor2) {
    case "blue":
        alert("blue is the color of the sky");
        console.log("blue entered");
        break;
    case "red":
        alert("Strawberries are red");
        break;
    case "cyan":
        alert("I don't know anything about cyan");
        break;
    default:
        alert(enteredColor2 + " isn't an approved color enter a new color");
        break;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var total = Number(prompt("What is the total purchase amount?"));
// var luckyNumber = 1;

function calculateTotal(discount, total) {
    var discount = luckyNumber * 10;
    var newTotal0 = (total);
    var newTotal1 = (total - (discount * total));
    var newTotal2= (total - (.25 * total));
    var newTotal3 = (total - (.35 * total));
    var newTotal4 = (total - (.50 * total));
    var newTotal5 = (total - (.100 * total));

    if (luckyNumber = 0) {
        alert(newTotal0 + "Sorry no discount!");
    } else if (luckyNumber = 1) {
        alert(newTotal1 + " great 10% discount applied");
    } else if (luckyNumber = 2) {
        newTotal2;
    } else if (luckyNumber = 3) {
        newTotal3;
    } else if (luckyNumber = 4) {
        newTotal4;
    } else if (luckyNumber = 5) {
        newTotal5;
    }
}
    console.log(calculateTotal(10, total));





    // return luckyNumber = newTotal
    //

 // * TODO:
 // * Uncomment the line below to generate a random number between 0 and 6.
 // * Prompt the user for their total bill, then use your `calculateTotal` function
 // * and alerts to display to the user what their lucky number was, what their
 // * price before the discount was, and what their price after the discount is.
 // */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
