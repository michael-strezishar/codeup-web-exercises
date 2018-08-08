"use strict";

var moviePrice = 3;

var brotherBearDays = Number(prompt("How many days did you rent Brother Bear?"));
var littleMermaidDays = Number(prompt("How many days did you rent Little Mermaid?"));
var herculesDays = Number(prompt("How many days did you rent Hercules?"));

var totalDays = herculesDays + brotherBearDays + littleMermaidDays;
var grandTotal = totalDays * moviePrice;

alert("You owe us " + grandTotal + " for your movie rentals");

// face book exercise//

var google = Number(prompt("How much do we charge Google?"));
var amazon = Number(prompt("How much do we charge Amazon"));
var faceBook = Number(prompt("How much do we charge Facebook?"));


var faceBookHrs = Number(prompt("How many hours did you work for Facebook?"));
var amazonHrs = Number(prompt("How many hours did you work for Amazon?"));
var googleHrs = Number(prompt("How many hours did you work for Google"));

var googlePymt = google * googleHrs;
var amazonPymt = amazon * amazonHrs;
var facebookPymt = faceBook * faceBookHrs;

var totalPay = googlePymt + amazonPymt + facebookPymt;

alert("You will receive " + totalPay + " in total payments!");


//class exercise

var classHasSpace = true;

var scheduleWorksForStudent = false;

var canBeEnrolledInClass = classHasSpace && scheduleWorksForStudent;

console.log(canBeEnrolledInClass);




//product purchase exercise

var moreThanTwoItems = true;

var offerIsValid = true;

var isPremiumMember = false;

var offerCanBeApplied = offerIsValid && (moreThanTwoItems || isPremiumMember);



console.log(offerCanBeApplied);

//password exercise

var username = 'codeup';
var password = 'notastrongpassword';

var passwordIsLongEnough = password.length >= 5;
var passwordContainsUsername = password.includes(username);
var usernameIsShortEnough = username.length <= 20;
var userNameHasWhiteSpace = username.trim() !== username;
var passwordHasWhtieSpace = password.trim() !== password;

var credentialsAreGood = passwordIsLongEnough && !passwordContainsUsername &&
    usernameIsShortEnough && !userNameHasWhiteSpace && !passwordHasWhtieSpace;
if(credentialsAreGood) {
    console.log("your account has been created.");
}