// for loop


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
//     if (element === 5) {
//         console.log(`You have reached ${element} its your First MileStone Achieved`);
//     }
// }
// // here we are getting both 5 and the comment in 2 different lines


// // here we printed both the number and the comment in the same line
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element === 5) {
//         console.log(`${element} - You have reached your First MileStone Achieved`);
//     } else {
//         console.log(element);
//     }
// }


// // for (let i = 0; i <= 10; i++) {
// //     console.log(`Outer Loop ${i}`)
// //     for (let j = 0; j <= 10; j++) {
// //         console.log(`Inner Loop ${j} and outer loop ${i}`);
// //     }
// // }


// // print table from 1-10 do not print the value of i = 0, but by taking input of i from 0
// // instead of 0's table print "I wont print the value of 0"

// for (let i = 0; i <= 10; i++) {
//     if (i === 0) {
//         console.log("I wont print the value of 0")
//     } else {
//         for (let j = 1; j <= 10; j++) {
//             console.log(`${i} x ${j} = ${i * j}`)
//         }
//     }
// }


// ----------- reverse table printing ----------------------


// for (let i = 10; i >= 0; i--) {
//     if (i === 0) {
//         console.log("I wont print the value of 0")
//     } else {
//         for (let j = 10; j >= 1; j--) {
//             console.log(`${i} x ${j} = ${i * j}`)
//         }
//     }
// }


// const myArray = ["flash", "superman", "batman", "aquaman"];
// console.log(myArray.length)
// for (let i = 0; i < myArray.length; i++) {
//     let element = myArray[i].toUpperCase();
//     console.log(element)
// }


// //program to find the sum of factorial of a number

// function addUp(num) {
//     let sumUp = 0;
//     for (let i = 1; i <= num; i++) {
//         sumUp += i;
//     }
//     console.log(sumUp);
// }
// addUp(4);
// addUp(10);
// addUp(2);


// // break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log("5 detected");
//         break;  // stops the iteration of the loop and gives a certain output
//     }
//     console.log(`The value of i is ${i}`);
// }


// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         // console.log("5 detected");
//         continue;  // continue simply let slip the condition for once and executes the rest of the code
//     }
//     console.log(`The value of i is ${i}`);
// }