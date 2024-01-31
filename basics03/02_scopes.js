// these values will be stored in aglobal variable
let a = 12;
const b = 45;
var c = 125;

if (true) {
    // Where as these let and const value will be limited to the scope of if block (block Scope)
    let a = 78;
    const b = 456;
    var c = 0;
    console.log("Inside Block Scope: ", a);
    console.log("Inside Block Scope: ", b);
    console.log("Inside Block Scope: ", c);
}

console.log("Outside Block scope or Global Scope value: ", a);
console.log("Outside Block scope or Global Scope value: ", b);
//but here come a problem in which the value of c gets updated in the global scope which is what i don't want that's why we donot use var 
console.log("Outside Block scope or Global Scope value: ", c);  
