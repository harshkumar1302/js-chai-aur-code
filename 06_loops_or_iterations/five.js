// array.forEach(element => {
// forEach syntax
// });

// // for each loop

// const coding = ["js", "cpp", "java", "python", "swift"];

// // using normal function
// coding.forEach(function (parameters) {
//     console.log(`Hello there ${parameters}`);
// })

// // using arrow function
// coding.forEach((parameters) => {
//     console.log(`hey there ${parameters}`)
// }
// )


// // OR
// // created a fucntion named simpleWork
// function simpleWork(items) {
//     console.log(items);
// }

// coding.forEach(simpleWork) //here it's a reference that is taking access of the function - here we do not have to call



// coding.forEach((items, index, array) => { // here in for each we also get index and arrays in the parameter
//     console.log(items, index, array);
// })


const mycodingLanguage = [
    {
        language: "javaScript",
        languageFileName: "js"
    },
    {
        language: "python",
        languageFileName: "py"
    },
    {
        language: "ruby",
        languageFileName: "rb"
    }
]

mycodingLanguage.forEach((items) => {
    console.log(items.language);
    console.log(items.languageFileName);
})