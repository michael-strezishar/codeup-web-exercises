"use strict";
var i = 2;
while (i <= 65536) {
    console.log(i);
    i *= 2;
}

// where do you start?
// where do you end?
// what changes between each time the loop runs?
// what's the condition by which we run the loop?

var allCones = Math.floor(Math.random() * 50) + 50;
var conesOrdered;
console.log("Starting today with " + allCones + " in my inventory");

do {
    conesOrdered = Math.floor(Math.random() * 5) + 1;
    console.log("The customer ordered " + conesOrdered + " number of cones.");

    if(conesOrdered <= allCones) {
        console.log("Sold " + conesOrdered + " number of cones.");
        allCones = allCones - conesOrdered;
        console.log("I now have " + allCones + " in my inventory.")
    } else {
        console.log("Im sorry I cant fulfill that order.");

    }

} while(allCones > 0);

