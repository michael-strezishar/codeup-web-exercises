function isTrue(input) {
    return input === true;

}
alert(isTrue(5));


function isFalse(input) {
    return input === false;
}
 alert(isFalse(true));

function not(input) {
    return input !== true;

}
console.log(not(false));

function addOne(input) {
    return input +=1;

}
console.log(addOne(6.789));

function isEven(input) {
    if(input %2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven("banana"));

function isIdentical(input, inputtwo){
    if (input === inputtwo) {
        return true;
    } else {
        return false;
    }
}

console.log(isIdentical(3, 4));

function isEqual(value1, value2) {
    if (value1 == value2){
        return true;
    } else {
        return false;
    }
}
console.log(isEqual("java", "javascript"));

function or(place, place2) {
    if (place || place2) {
        return true;
    } else {
        return false;
    }
}

console.log(or("hello", "world"));

function and(val1, val2) {
    if (val1 && val2) {
        return true;
    } else {
        return false;
    }
}
console.log(and("hello", "world"));

function concat(inputed, inputed2) {
    if (inputed + inputed2) {
    }
}
console.log(concat("code", "up"));