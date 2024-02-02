// for(const key in object){
// syntax for - for in    
// }
// for in for object = iterable

const language = {
    js: "javaScript",
    rb: "Ruby",
    cpp: "C++",
    swift: "Swift by Apple"
}

// for (const i in language) {
//     console.log(`${i} = ${language[i]}`)
// }


for (const key in language) {
    console.log(`${key} = ${language[key]}`)
}



// // for in for array = here we get key of an array key = index of array

// const programming = ["js", "ruby", "cpp", "swift"];

// for (const key in programming) {
//     console.log(key);
// }

// for (const key in programming) {
//     console.log(programming[key]);
// }



// // for in for map =  it is not iterable directly

// const map = new Map();
// map.set("IN", "India");
// map.set("IN", "Indonasia");
// map.set("In", "India");
// map.set("USA", "United States Of America");
// map.set("FR", "France");
// map.set("FR", "France");


// for (const key in map) {
//     console.log(key);
// }