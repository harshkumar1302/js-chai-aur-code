const name = "Harsh";
const repoCount = 5;

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("harshgamer");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("a"));
console.log(gameName.substring(0, 2));
// neagtive not possible in substring other than that slice doeses the same
console.log(gameName.slice(0, 2));
console.log(gameName.slice(-8, 4));

const gameName1 = "     harsh     ";
console.log(gameName1);
console.log(gameName1.trim());


const url = "https://www.harsh.com/harsh%20kumar";
console.log(url.replace("%20", "-"));
console.log(url.includes("harsh"));
console.log(url.includes("hello"));


const newName = "harsh-kumar";
console.log(newName.split("-"));

console.log(newName);
console.log(newName.split(""));

const splitName = newName.split("");
const reverseName = splitName.reverse();
console.log(reverseName);
console.log(reverseName.join(""));









