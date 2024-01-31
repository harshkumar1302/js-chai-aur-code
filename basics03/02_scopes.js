// // these values will be stored in aglobal variable
// let a = 12;
// const b = 45;
// var c = 125;

// if (true) {
//     // Where as these let and const value will be limited to the scope of if block (block Scope)
//     let a = 78;
//     const b = 456;
//     var c = 0;
//     console.log("Inside Block Scope: ", a);
//     console.log("Inside Block Scope: ", b);
//     console.log("Inside Block Scope: ", c);
// }

// console.log("Outside Block scope or Global Scope value: ", a);
// console.log("Outside Block scope or Global Scope value: ", b);
// //but here come a problem in which the value of c gets updated in the global scope which is what i don't want that's why we donot use var
// console.log("Outside Block scope or Global Scope value: ", c);


// function one() {
//     const username = "Harsh";

//     function two() {
//         const email = "h@13gmail.com";
//         console.log(username);
//     }
//     // console.log(email); // we cannot access email outside of the scope of two because of the scope property
//     two(); // if we donot invoke two() function here we wont be able to access the log when one() called
// }
// // one();


// if (true) {
//     const firstName = "Harsh";
//     if (true) {
//         const middleName = "Kumar";
//         console.log(firstName, middleName)
//     }
//     // console.log(middleName)// we wont be able to access middle name outside the if scope
// }
// // console.log(firstName) // we wont be able to access first name outside the if scope


console.log(addOne(5)); // here we can access the function before declaring beacuse of hoisting
function addOne(num) {
    return num + 1;
}


// console.log(addTwo(45));
// but here we cannot access the function before declaration because now the funciton is stored in an variable which is
// not hoisted 
// only the declaration of an variable is hoisted not the initialization

const addTwo = function (num) {
    return num + 2;
}

console.log(addTwo(10));


