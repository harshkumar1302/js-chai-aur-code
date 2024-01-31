// IIFE (Immediately Invoked Function Expressions)

// here we are noramally calling calling function here we need to call it to execute
// function startServer() {
//     console.log("CONNECTED THE SERVER");
// }
// startServer();

// But by IIFE we call it immediately 
// using IIFE helps use calling a function immediately and also to avoid aur code to get global scope polluted
// ()(); IIFE Syntex

(function startServer() {
    // These type function is named IIFE
    console.log("CONNECTED TO SERVER!")
})();

(() => {
    // simple IIFE / Unnamed IIFE
    console.log("DB CONNECTED");
})();

((username) => {
    console.log(username)
})("Harsh");