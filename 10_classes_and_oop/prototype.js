// let myName = "Harsh     ";

// console.log(myName.length)
// console.log(myName.trim().length)
// console.log(myName.trueLength); // create a method




let myHeros = ["thor", 'spiderman'];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    },
}


// If we create a method directly into the object all arrays, functions and string will posses the same method

Object.prototype.harsh = function () {
    console.log("I am at your service sir/maam.")
}

// But when we create a method for an array here it is only accessable to the array only it cannot be accessed by others

Array.prototype.heyPowers = function () {
    console.log("I am here only for the heros.")
}

myHeros.heyPowers();
// heroPower.heyPowers();  // it will give a error 

heroPower.harsh();
myHeros.harsh();


// inheritance 

const User = {
    name: 'Chai',
    email: `gahery@google.com`
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User;

// this is old approach
// this is prototypal inheritance

//  modern Syntax for protypal inhheritance is 
Object.setPrototypeOf(TeachingSupport, Teacher) // here teachingsupport is inheriting all the properties of teacher




// now after understanding prototype we will create a property or method of ourself
let myName = "Harsh     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`The true length is ${this.trim().length}`)
}

myName.trueLength();
"Kumar".trueLength();
"bittu".trueLength();