// declaration method (constroctur) = singleton object
// object.create (constructor method of creating an object)

// declaration method (object literals) = !(singleton object) but multiple instances
// const obj1 = {} (literals methods of creating object) which makes multiple instances



const mySym = Symbol("Key1");  // interview question (access a symbol inside the object and dispaly it)

const jsUser = {
    // key:  "value"
    name: "Harsh",  // here the key is also treaded as a string 
    "Full Name": "Harsh Kumar Suman",
    age: 25,
    location: "Bokaro",
    email: "harsh@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Sunday"],
    mySym: "myKey1",  // this not the right way to access symbol in any object
    [mySym]: "myKey2" // this is the correct syntax to access a symbol inside an object by ([]) this
}

// console.log(jsUser.name); // access objects (dot notation)
// console.log(jsUser["name"]) // access objects (bracket notation)
// // console.log(jsUser."Full Name"); // throws an syntax error because ." " is not possible
// console.log(jsUser["Full Name"]); // by bracket notation we can access [" "]
// console.log(jsUser.mySym);
// console.log(jsUser[mySym])

// jsUser.email = "harshk12@gmail.com"; // we can change the of the given object
// console.log(jsUser)

// Object.freeze(jsUser);  // by this Object.freeze(object_name) we can freeze the keys and values inside the object unchangeable
// jsUser.name = "bittu"; // here this changes won't propogate inside the object jsUser
// console.log(jsUser)

// function in object 

let greeting1 = jsUser.greeting = function () {
    return "Hello JS users";
}
console.log(greeting1());


jsUser.greeting2 = function () {
    console.log(`Hello JS users: ${this.name}`); // here this. refers to the current object
}

console.log(jsUser.greeting2())

