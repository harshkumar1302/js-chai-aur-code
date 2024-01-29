const score = 400;
const balance = new Number(100);

console.log(score);
console.log(balance);


const numToString = balance.toString();
// console.log(typeof numToString)
console.log(numToString.length)

const newBalance = 1256.457;
console.log(newBalance.toFixed(1));
console.log(newBalance.toFixed(2));

const hunderds = 1000000;
console.log(hunderds.toLocaleString())




// ------------------------------------------- Maths -------------------------------------------------------

// console.log(Math);
// console.log(Math.abs(-4));  // converts negative to positive only
// console.log(Math.round(4.56));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 5, 8, 9, 1));
// console.log(Math.max(4, 8, 9, 72, 0));


console.log(Math.random());  // value varies between 0 and 1

// in case of getting value above 1
const randomValue = (Math.random() * 10) + 1;
console.log(randomValue.toFixed(2));


// to get an output between the min and max number 
const min = 10;
const max = 20;

// const limitNumber = ((Math.random() * (max - min + 1)) + min).toFixed(2);

const limitNumber = Math.floor((Math.random() * (max - min + 1)) + min);
console.log(limitNumber);



