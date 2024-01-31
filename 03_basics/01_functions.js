// console.log("H");
// console.log("A");
// console.log("R");
// console.log("S");
// console.log("H");

// function sayMyName() {
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("S");
//     console.log("H");
// }

// sayMyName; // just reference
// sayMyName(); // function execution


// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }
// addTwoNumbers(3, 4);
// addTwoNumbers(3, "a");
// addTwoNumbers(3, "4");
// addTwoNumbers(3, null);


// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }
// const results = addTwoNumbers(8, 34);  // this line gives an output of 8
// console.log(results) // this just consoles the output which is undefined

// function addTwoNumbers(num1, num2) {
//     // let results = num1 + num2
//     // console.log("Hello");
//     // return results;
//     // // console.log("Hello"); // this doesn't prints because after the return keyword the function ends

//     return num1 + num2; // this technique save the space of a variable
// }
// const results = addTwoNumbers(8, 34);
// console.log(results)


// function loginMessage(username) {
//     return `${username} just logged in`
// }
// // loginMessage("Harsh")// this won't give any output because here were are just returning the value not consoling it
// // console.log(loginMessage("Harsh"));
// let loginPrompt = loginMessage("Harsh");
// console.log(loginPrompt);



// function loginMessage(username) {
//     // if (username === undefined)
//     if (!username) { // here this line says it username is not true then execute the if scope code
//         console.log("Please enter a valid username")
//         return;
//     }
//     return `${username} just logged in`
// }
// function loginMessage(username = "sam") { // giving it a default value in the parameters which can be overridden when value passed in argument
//     if (!username) {
//         console.log("Please enter a valid username")
//         return;
//     }
//     return `${username} just logged in`
// }

// // console.log(loginMessage());
// console.log(loginMessage("Kumar"));



// function calculateCartPrice(...num1) { //... here it is rest operator
//     return num1;
// }
// console.log(calculateCartPrice(233, 599, 99, 4789));

// function calculateCartPrice1(val1, val2, ...num1) {
//     return num1;
// }

// console.log(calculateCartPrice1(233, 599, 99, 4789));


const obj1 = {
    productName: "shampoo",
    price: 897
}

function cartBill(anyobject) {
    console.log(`Your item ${anyobject.productName} costs ${anyobject.price}`)
}

// cartBill(obj1);

cartBill({
    productName: "notebook",
    price: 569
});



const myNewArray = [1, 5, 78, 9, 4];

function returnSecondValue(getArray) {
    return getArray[2];
}

// console.log(returnSecondValue([12, 45, 7, 9, 2, 72]));
console.log(returnSecondValue(myNewArray))

