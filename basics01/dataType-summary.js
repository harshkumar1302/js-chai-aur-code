// JavaScript is a dynamically typed language, which means that data types of variables are determined by
// the value they hold at runtime and can change throughout the program as we assign different values to them.


// Data Type:-

// Primitive Data Type
// 7 types: string, number, boolean, null, undefined, symbol, BigInt

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumebr = 7847289047890n;
console.log(bigNumebr);

// Reference (Non Primitive) Data Type
// Array, Objects, Functions

const heros = ["ironman", 'cap', "antman"]
const intro = {
    name: "fhbdjk",
    age: 90
}

function myFunction() {
    console.log("Hello EveryOne");
}

myFunction();



console.log(typeof 6);  // number
console.log(typeof "Hello");  // string
console.log(typeof null); // object
console.log(typeof undefined); // undefined 
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof NaN); // number 
console.log(typeof 3478923748237893n); // bigInt

console.log(typeof myFunction); // function but called function object 
console.log(typeof heros); // object
console.log(typeof intro); // object
console.log(typeof id); // symbol