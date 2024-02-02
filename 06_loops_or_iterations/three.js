// for(const iterator of object){
// syntax for - for of
// }
// for of on array = it is iterable


// ["", "", "", ""]
// [{}, {}, {}, {}]
// not only numbers or strings but we also get objects in an array as the data

// const arr = [1, 2, 3, 4, 5];

// for (const nums of arr) {
//     console.log(nums);
// }


// for of on string = it is iterable

// const greeting = "Hello World";

// for (const greet of greeting) {
//     if (greet === " ") {
//         continue;
//     } else {
//         console.log(`Each char is ${greet}`);
//     }
// }


// for of on map = it is iterable

// const map = new Map();
// map.set("IN", "India");
// map.set("IN", "Indonasia");  // unique key:
// map.set("In", "India"); // can be dublicate values
// map.set("USA", "United States Of America");
// map.set("FR", "France");
// map.set("FR", "France"); // unique Key

// // console.log(map);


// for (const mapping of map) {
//     console.log(mapping);
// }

// for (const [key, value] of map) {
//     // console.log(key, value);
//     console.log(`${key}:- ${value}`);
// }



// for of on object = it is not iterable
// we cannot access object directly by for of

// const gaming = {
//     game1: "NFS",
//     game2: "GTA-VICITY",
//     game3: "GTA-SAN ANDREAS"
// }

// for (const games of gaming) {
//     console.log(games);
// }