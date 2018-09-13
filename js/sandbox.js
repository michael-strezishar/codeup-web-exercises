// function fizzBuzz(num) {
//     for(var i = 1; i <= num; i++) {
//         if(i % 5 === 0 && i % 3 ===0){
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0){
//             console.log("Fizz");
//         } else if (i % 5 === 0){
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// console.log(fizzBuzz(100));

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



// function findLongWord (string) {
//     var longest = 0;
//     var word = string.split(" ");
//     for (var i = 0; i < word.length; i++) {
//         if (word[i].length > longest){
//             longest = word[i].length
//             }
//     }
//
//     return longest;
// }
//
// console.log(findLongWord("The colors of the rainbow are a vast array"));
//
// var car = {
//     make: "Ford",
//     model: "GT40",
//     year: 1968
// };
//
// function countRepeating (word){
//     var mostRepititions = 0;
//
//     for(var i = 0; i<word.length; i++) {
//         var repititions = 1;
//         for (var j = i+1; j < word.length; j++) {
//             if (i != j && word[i].toLowerCase() === word[j].toLowerCase())
//                 repititions++;
//         }
//         }
//         if (repititions > mostRepititions) {
//             mostRepititions = repititions;
//
//         }
//     return mostRepititions;
// }
//
// console.log(countRepeating("akrrakkkkk"));
//
//
// function increment(x) {
//     var larry = 6;
//     return x + (2 * larry);
// }
//
// console.log(increment(4));
//
// function shout(message){
//     alert(message.toUpperCase() + "!!!");
// }
// var returnIt = shout("sup larry!");
// console.log(returnIt);
//
// var numberToStop = 5;
//
// for (var i = 1; i < 100; i++) {
//     console.log("Loop counter is: " + i);
//
//     if (i === numberToStop){
//         console.log("We have reached the stopping point: break!");
//         break;
//         console.log("Never mind me!");
//     }
// }
//
// function mutilplyNum (num1, num2){
//     var n = num1;
//     for (var i = 1; i < num2; i++) {
//         num1 += n;
//     }
//         return num1
//
// }
//
// console.log(mutilplyNum(9,0));
//
// function factorial (n) {
//     var val = 1;
//     for (var i = 2; i <= n; i++)
//         val = val + i;
//     return val;
// }
//
// console.log(factorial(3));
//
// function capitalizeFirstLetter (string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//
// }
//
// console.log(capitalizeFirstLetter("the bear went over the mountain"));
//
// var names = ["bill", "bob", "karen", "larry"];
//
// for(i = 1; i < names.length; i++){
//     console.log("The name of index " + i + "is " + names[i]);
// }
//
// var me = {
//     name: "Michael Strezishar",
//     hairColor: "Blonde",
//     eyeColor: "Blue",
//     birthDay: {
//         month: 8,
//         day: 21
//     }
//
// };
//
// var lar = {
//     name: "Larry Bear",
//     hairColor: "Black",
//     eyeColor: "Brown",
//     birthDay: {
//         month: 6,
//         day: 23
//     }
// };
//
// var meg = {
//     name: "Megan Strezishar",
//     hairColor: "Black",
//     eyeColor: "Brown",
//     birthDay: {
//         month: 12,
//         day: 3
//     }
// };
// var students = [];
// for(var i = 0; i < students.length; i++){
//     if ([i] === students);
// console.log([i]);
// }
//
// var playUke = function(){
//     console.log("I play the Ukele!");
// };
// console.log("The hair color of Meg is " + meg.hairColor);
// students.push(me, "efefe");
// students.push(lar);
//
// me.heyMe = function (){
//     console.log("Hi my name is "+ this.name + " my hair color is " + this.hairColor + " my eye color is " + this.eyeColor
//     + "and " + playUke());
// };
//
// me.heyMe();
//
// console.log(typeof playUke());

// var animalNames = ["Fern", "Lenny", "Sam", "Razzle", "Mochie"];
//
// for (var i = 0; i<animalNames.length; i++){
//     console.log(animalNames[i]);
// }

// let dogs = [
//     {
//         name: "Lenny",
//         age: 3,
//         breed: "Boxer",
//         sex: "male"
//     },
//     {
//         name: "Fern",
//         age: 8,
//         breed: "Chihuaha",
//         sex: "female",
//         nickname: "Fern-Marie"
//     },
//     {
//         name: "Sam",
//         age: 10,
//         breed: "Pitmouth",
//         sex: "male",
//         bark: function (){
//             console.log("Wooooff");
//         }
//     },
//     {
//         name: "Ozzy",
//         age: 9,
//         breed: "Rat Terrier",
//         sex: "Male",
//         nickname: "Razzle"
//     },
//     {
//         name: "Wicket",
//         age: 11,
//         breed: "Chow",
//         sex: "Female"
//
//     },
//     {
//         name: "Yoda",
//         age: 5,
//         breed: "Greyhound",
//         sex: "Female"
//
//     }
// ];
//
// const sum = dogs.reduce((accumulation, current) => {
//     return accumulation + current.age;
// }, 0);
//
// console.log(sum);
//
// const names = dogs.filter((i) => {
//     return (i.name === "Yoda");
// });
//
// console.log(names);
//
// let oldestDog = dogs.reduce((oD, nextDog) => {
//     if (nextDog.age > oD.age) return nextDog;
//     else return oD;
// },{age: 0});
// console.log(oldestDog);

// function ourFunction(animals) {
//     for (var i = 0; i < animals.length; i++){
//         if (animals[i].age >= 3 && animals[i].breed.includes("ua")){
//             console.log(animals[i].name);
//         }
//     }
// }
// ourFunction(dogs);
//
// function fizzBuzz (n) {
//     for (var i = 1; i<=n; i++){
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log("fizzbuzz");
//         } else if (i % 3 === 0){
//             console.log("fizz");
//         } else if (i % 5 === 0){
//             console.log("buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// console.log(fizzBuzz(100));


// var i = 0;
// while(i <= 10){
//     console.log(i);
//     i++
// }

// var i = "true";
//
// console.log(i === true);



// var car = {
//     make: Acura,
//     model: NSX,
//     year: 1993,
//     color: Black,
//     options: {
//         transmission: standard,
//         trim: leather,
//         tiresize: 16,
//     },
//     accelerate: function (level){
//         this.speed += level*3
//     }
//
//     ,
//     brake: function (level) {
//         this.speed += level * 6
//     }
//     ,
//     speed: 55,
//     honk: function (traffic){
//         if (traffic === "heavy");
//          return honk
//     }
// }

// function factorial (n){
//     if (n == 0){
//        return 1;
//     } else {
//         return factorial(n - 1) * n;
//     }
// }
//
// console.log(factorial(6));


// let fizzBuzz = (num) => {
//     for (var i = 1; i <= num; i++){
//         console.log((i % 3 === 0 && i % 5 === 0) ?
//                 "fizzbuzz" : (i % 5 === 0  ?
//                     "buzz" : (i % 3 === 0 ?
//                         "fizz" : i)));
//     }
// }
// fizzBuzz(50);

// const fizzBuzz2 = num => {
//     let i = 1;
//     while (i < num) {
//         if ( i % 15 === 0)
//             console.log("fizzbuzz")
//         else if (i % 3 === 0)
//             console.log("fizz")
//         else if (i % 5 === 0)
//             console.log("buzz")
//         else
//             console.log(i);
//         i++;
//     }
// }
// fizzBuzz2(100);

// for(let i=0;i<1000;)
//     console.log(
//         ( ++i%3 ? ‘’ : ‘fiz’ ) + ( i%5 ? ‘’ : ‘buzz’ ) || i)


function getPrimes(max){
    var sift = [], i, j, primes = [];
    for (i = 2; i <= max; ++i){
        if (!sift[i]){
            primes.push(i);
            for (j = i << 1; j<=max; j += i){
                sift[j]= true;
            }
        }
    }
    return primes;
}

console.log(getPrimes(100));

const getFib = n => {
    let fib = []
}