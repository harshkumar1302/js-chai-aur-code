// if (condition) {
// log         // syntax to if else
// }

// const isUserLoggedIn = true;
// const temperature = 26;

// if (temperature >= 30) {
//     console.log("Hot")
// } else if (temperature < 30 && temperature >= 20) {
//     console.log("Moderate")
// } else {
//     console.log("Cold")
// }

// <, >, <=, >=, ==, !=, === (strict equal to / checks value and type), !== (strict not equal to)


// const score = 200;
// if (score > 100) {
//     const power = "Fly";
//     console.log(`you have the power to ${power}`);
// }
// // console.log(`you have the power to ${power}`) // not accessable out side of the scope

// // const points = 1000;
// // if (points > 100) console.log("hero mt bano"), console.log("waps likho code tameez s");
// // // never use this type of short hand during coding if condition




const userLoggedIn = true;
const userDebitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && userDebitCard) {
    console.log("Allow to buy the course")
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged in")
}