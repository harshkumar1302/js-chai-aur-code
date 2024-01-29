// stack memory (primitive)
// heap memory (non- primitive)



let myName = "Harsh";
let mySecondName = myName;
mySecondName = "Bittu"

console.log(myName);
console.log(mySecondName);


let obj1 = {
    name: "harsh",
    age: 30
}

console.log(obj1);

let obj2 = obj1;
obj2.name = "bittu"
console.log(obj1.name);
console.log(obj2.name);
