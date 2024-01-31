/* Falsy values 

false, 0, -0, BigInt = 0n, undefined, null, NaN, ""

/*

Truthy values
every other value than falsy is truthy
some unique truthy value are = "0", "false", " ", [], {}, function(){}

----------- interesting -------------------
false == 0 (true)
false == "" (true)
0 == "" (true)

*/

// check if an array is empty 

const arr1 = [];
if (arr1.length === 0) {
    console.log("Array is empty")
}

const obj1 = {}
if (Object.keys(obj1).length === 0) {
    console.log("Object is empty")
}



// -------------------------- Nullish Coalescing Operator (??): null, undefined ---------------------------------------------- 
// fall back to handle error or wanna put some value to the error

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 15;
// val1 = undefined ?? 20
val1 = null ?? 10 ?? 25 // will give the first value after ?? if there is error

console.log(val1)


//---------------------------- Terniary Operator -------------------------------------
// condition ? true : false

const iceTeaPrice = 100;
(iceTeaPrice <= 80) ? console.log("less than 80") : console.log("more than 80");