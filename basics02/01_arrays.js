// Array
// it is written inside [] and it holds some elements (it can be number, stings, boolean...)
// it can be resizable
// indexing starts from 0
// shallow copy it created  = a copy where properties shares the same references like heap memory
// (deep copy = a copy where properties do not share the same references like stack memory) ----- not related to array ------ 


const myArr = [0, 2, 5, 4, 8, 9];
const myHeros = ["saktiman", "chacha chaudhry", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4, 5, 6);

// console.log(myArr);
// console.log(myArr2);
// console.log(myHeros);

// console.log(myArr[1]);


// Array methods

// push pop
// myArr.push(99);  // this simply pushes or adds a new element at the end of the given array
// myArr.push(7);
// console.log(myArr);

// myArr.pop() // this simply pops out the last element from the given array
// console.log(myArr);

// // unshift shift
// myArr.unshift(9);// this adds an element at the start of an array(although this is not an good practice as it shifts the value of every array)
// console.log(myArr);
// myArr.shift(); // this pops out the very first value from the given array
// console.log(myArr);

// console.log(myArr.includes(9)); // it checks whether the given argument is present in the given array or not
// console.log(myArr.indexOf(9)); // indexOf checks and gives the index of the given argument
// console.log(myArr.indexOf(100)); // -1 means there is no value as 100 in the array


// // join

// console.log(myArr);
// const newArr = myArr.join();
// console.log(newArr); // here this value of the array has been converted into string by using join() method


// slice and splice

console.log("A", myArr); // origonal array
const mArr1 = myArr.slice(1, 3);  // array using slice
console.log(mArr1);


console.log("B", myArr);
const mArr2 = myArr.splice(1, 3); // array using splice
console.log("C", myArr); // using splice my original array changes
console.log(mArr2);
console.log(mArr1);


// splice manupulates the original array by cutting out the the portion given in the argument of the splice method
// whereas slice does not manupulates the original array

