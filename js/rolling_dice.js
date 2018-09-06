"use strict";


// function rollDie(){
//     var sixSide = Math.floor(Math.random() * 6) +1;
//     return sixSide;
//
// }

function twoDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");

    var di1 = Math.floor(Math.random() * 6) +1;
    var di2 = Math.floor(Math.random() * 6) +1;

    var diceTotal = di1 + di2;
    die1.innerHTML = di1;
    die2.innerHTML = di2;
    status.innerHTML = "You rolled " + diceTotal + ".";
    if (di1 === 1 && di2 === 1){
        status.innerHTML += " SNAKE-EYES!";
    } else if (di1 === di2) {
        status.innerHTML += " DOUBLE ACTION You are a pro!";
    } else if (diceTotal === 7){
        status.innerHTML += " CRAPS! You Lose";
    }
    return diceTotal;

}
console.log("Your total is " + twoDice());
//
//
// function twentySidedDie() {
//     var twentySide = Math.floor(Math.random() * 20) + 1;
//     return twentySide;
// }
//
// function twelveSideDie(){
//     var twelveSide = Math.floor(Math.random() * 12) +1;
//     return twelveSide;
// }
//
// function tetrahedron(){
//     var tetra = Math.floor(Math.random() * 4) +1;
//     return tetra;
// }
//
// console.log(twelveSideDie());
// console.log(twentySidedDie());