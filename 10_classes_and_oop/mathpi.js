const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter)


const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {  // Object.entries(chai) = to make the object iterable
    console.log(` ${key}: ${value}`);
}