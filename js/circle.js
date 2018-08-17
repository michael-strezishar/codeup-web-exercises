(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * (this.radius * this.radius);
            return area; // TODO: return the proper value
        },
        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding === true) {
                 return Math.round(this.getArea());
            } else {

            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));

})();


var itemForSale = {
    "price": 2.99,
    "logPrice": function(weWantToRoundPrice){
        if (weWantToRoundPrice){
            console.log("The approximate price of the item is " + Math.round(this.price));
        } else {
            console.log("The exact price of this item is " + this.price);
        }
    }
};
itemForSale.logPrice(true);

itemForSale.logPrice(false);