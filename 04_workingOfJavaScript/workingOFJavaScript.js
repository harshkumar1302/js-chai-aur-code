
// // example for understanding working of Js 
// let val1 = 10;
// let val2 = 5;
// function addNum(num1, num2) {
//     let total = num1 + num2;
//     return total;
// }
// let result1 = addNum(val1, val2);
// let result2 = addNum(27, 10);
// console.log(result1);
// console.log(result2);



// example for understanding working of (call stack)
function one() {
    console.log("One")
}

function two() {
    console.log("two")
    three()
}

function three() {
    console.log("Three")
    one()
}

one()
two()
three()