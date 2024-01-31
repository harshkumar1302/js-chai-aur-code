// const profileDetails = {
//     username: "Harsh",
//     age: 23,
//     welcomeMessage: function () {
//         console.log(`Hey ${this.username}, welcome to our website.`)
//         console.log(this);
//     }
// }

// profileDetails.welcomeMessage();
// profileDetails.username = "Rahul";
// profileDetails.welcomeMessage();

// console.log(this);
// // this creates an empty {} object beacuse it is in node enviroment and it refers to empty object
// // but where as in browser enviroment this refers to the window object




// function checkFuncitonsObject() {
//     const name = "Harsh"
//     console.log(this);
//     // console.log(this.name) // this gives undefined as this does not gives expected output when used in functions it is allowed in object
// }
// checkFuncitonsObject()



// const username = function () {
//     console.log("Harsh");
// }

// const username1 = () => {
//     console.log("kumar")
// }


// // this is not possible because arrow function needs an declaration
// // username2() => {
// //     console.log("suman");
// // }

// const username3 = (name) => { console.log(name); }

// username();
// username1();
// username3("suman");


// normal arrow fucntion or explicit return when we need to use retrun keyword
// const addTwoNum = (num1, num2) => {
//     return num1 + num2;
// }
// when there is {we need an return}

// implicit return here we do not have to give {} and return
// const addTwoNum = (num1, num2) => num1 + num2;
// but when we have () or no nothing wrapped we do not need return keyword

// const addTwoNum = (num1, num2) => (num1 + num2)

// console.log(addTwoNum(4, 9));


// // const objectUse = () => { username: "Harsh" } // here this will give undefined because we cannot use object without (parentheses)
// const objectUse = () => ({ username: "Harsh" }) // right way to write an object

// console.log(objectUse());



