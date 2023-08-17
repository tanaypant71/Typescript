//Built-in types

let sales = 123_456_789;
let course: string = 'John';
let isBeginner: boolean = true;
let level;
//====================================================================================================

//Any type
function hello(name: any) {
    console.log(`Hello ${name}`);
}
//====================================================================================================

//Arrays
let list1 = [];
let list2: number[] = [1, 2, 3];
//====================================================================================================

//Tuple
let person1: [string, number] = ['John', 22];
//====================================================================================================

//Enum
//using an enum we can represent a list of related constants and if we define our in-apps using the 
//constant keyword the compiler will generate more optimized code
const enum Color { Red = 1, Green, Blue };
let mySize: Color = Color.Green;
console.log(mySize);
//====================================================================================================

//Functions
function calculateTax(amount: number): number {
   if (amount < 5000) 
       return amount * 1.2;
    return amount * 1.3;
}
console.log(calculateTax(6000));
//====================================================================================================

//Objects
let employee: {
   readonly id: number;
    name: string,
    retire: (date: Date) => void
} = { id: 1, name: 'John', retire: function (date: Date) { } };
