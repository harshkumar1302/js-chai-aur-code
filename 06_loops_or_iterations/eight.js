// // reduce 
// // acc = accumulator , currval = currentValue
// // here after coma(,) we put the value which we want to store in the accumulator

const myNum = [1, 5, 9];

// // // this here is for better understanding
// // const myTotal = myNum.reduce(function (acc, currval) {
// //     console.log(`acc: ${acc} and currval: ${currval}`)
// //     return acc + currval;
// // }, 1)
// // console.log(myTotal)

// const myTotal = myNum.reduce((acc, currval) => acc + currval, 0)
// console.log(myTotal)


const shoppingCart = [
    {
        item: "Js Course",
        price: 2999
    },
    {
        item: "python Course",
        price: 999
    },
    {
        item: "mobile dev Course",
        price: 5999
    },
    {
        item: "data science Course",
        price: 12999
    }
];

const totalPrice = shoppingCart.reduce((acc, item) => (acc + item.price), 0);
console.log(totalPrice);