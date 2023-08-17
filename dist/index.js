"use strict";
//Built-in types
let sales = 123456789;
let course = 'John';
let isBeginner = true;
let level;
//====================================================================================================
//Any type
function hello(name) {
    console.log(`Hello ${name}`);
}
//====================================================================================================
//Arrays
let list1 = [];
let list2 = [1, 2, 3];
//====================================================================================================
//Tuple
let person1 = ['John', 22];
;
let mySize = 2 /* Color.Green */;
console.log(mySize);
//====================================================================================================
//Functions
function calculateTax(amount) {
    if (amount < 5000)
        return amount * 1.2;
    return amount * 1.3;
}
console.log(calculateTax(6000));
//# sourceMappingURL=index.js.map