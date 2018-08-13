var myName = prompt("What is your name?");

var birthday = function (name) {
    var message = "Happy Birthday " + String(name) + "!!!";
    console.log(message);
}

var myDogsName = "Lenny";
birthday(myName);
birthday("Mike");
birthday(myDogsName);



