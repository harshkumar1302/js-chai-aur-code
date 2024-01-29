/*
Prefer not to use var because of issue in block scope and functional scope
*/

const accountId = 14567898;
let accountEmail = "harsh@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";  // not a good way of initiaziling any variable
let accountState;

accountEmail = "hay@gmail.com";
accountPassword = "djkls";
accountCity = "kerala"

// accountId = 2;
console.log(accountId);

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);