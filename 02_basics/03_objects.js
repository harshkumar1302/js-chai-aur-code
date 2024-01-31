// const tinderUser = new Object() // singleTon object
// const tinderUser1 = {} // not singleton object
// // in both we are declaring an empty object named tinderUser and tinderUser1
// console.log(tinderUser);
// console.log(tinderUser1);

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Harsh";
tinderUser.isLoggedIn = "false";
// console.log(tinderUser);

// object inside object 

const regularUser = {
    email: "hash12@gamil.com",
    fullName: {
        userName: {
            firstName: "Nil",
            middleName: "Nitin",
            lastName: "Mukesh"
        }
    }
}
// we can create nesting in object
// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userName);
// console.log(regularUser.fullName.userName.firstName);
// console.log(regularUser.fullName.userName.lastName)
// console.log(regularUser.myName?.userName.lastName) // here ? creates optional chaining were we check that if there is an object named myName present or not - if not (undefined)



// merge objects 

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = { obj1, obj2, obj3 }
// const obj5 = { ...obj1, ...obj2, ...obj3 } // will be used most
// const obj6 = Object.assign({}, obj1, obj2, obj3) // here in (Object.assign(target, source)) this is the syntax means every value of the source is going inside the target
// console.log(obj4);
// console.log(obj5);
// console.log(obj6);


const userData = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    }
]

let data1 = userData[1].email; // this is how will be accesing datas having multiple object
// console.log(data1);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// hasOwnProperty used to check whether it has this property or not
console.log(tinderUser.hasOwnProperty("email"));
console.log(tinderUser.hasOwnProperty("name"));


