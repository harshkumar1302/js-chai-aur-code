// const names = [
//     {
//         name: "harsh",
//         age: 19
//     },
//     {
//         name: "kumar",
//         age: 21
//     },
//     {
//         name: "suman",
//         age: 10
//     },
//     {
//         name: "dheeru",
//         age: 20
//     },
//     {
//         name: "takla",
//         age: 30
//     },
//     {
//         name: "joshi",
//         age: 9
//     }
// ];

// // const getUnderGrad = names.filter((limit) => limit.age > 18);
// // console.log(getUnderGrad);

// function myLimit(limit) {
//     return limit.age > 18;
// }

// // const getUnderGrad = myLimit(names);
// Array.prototype.myFilter = function (myLimit) {
//     const myArray = [];
//     for (let i = 0; i < this.length; i++) {
//         if (myLimit(this[i]))
//             myArray.push(this[i]);
//     }
//     return myArray;
// }
// const drunk = names.myFilter(myLimit)
// console.log(drunk)





const myArray = [2, 5, 8, 9, 7, 10];

const productNums = myArray.reduce((num1, num2) => (num1 * num2), 1);
console.log(productNums)

const shopping = [
    {
        productName: "bag",
        price: 500,
        quantity: 5
    },
    {
        productName: "Zbag",
        price: 100,
        quantity: 8
    },
    {
        productName: "Ybag",
        price: 5000,
        quantity: 1
    },
    {
        productName: "Wbag",
        price: 600,
        quantity: 3
    },
    {
        productName: "Ebag",
        price: 8000,
        quantity: 10
    },
];

const totalPrice = shopping.filter((nums) => nums.price > 500).reduce((acc, val) => acc + (val.price * val.quantity), 0);
console.log(totalPrice)