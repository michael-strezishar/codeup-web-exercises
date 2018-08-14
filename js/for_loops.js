"use strict";

function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}
showMultiplicationTable(8);
//


var randomNumber = Math.floor(Math.random() * 180) + 20;

for (var i = 0; i <= 10; i++){
    if (i === 0){
        console.log(i + " is even");
    }
    else if (i % 2 === 0){
        console.log(i + " is even");

    }
    else {
        console.log(i + " is odd");
    }
}
//
//
for (var i = 100; i > 0; i-=5){
    console.log(i);
}

var num = "";
var value = 9;
for (var i = 1; i <= value; i++) {
    num = "";
    for (var j = 1; j <= i; j++) {
        num += i;

    }
    console.log(num);
}



