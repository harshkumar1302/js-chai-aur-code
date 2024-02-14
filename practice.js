const pizzas = [
    {
        name: 'Calzone',
        toppings: ['Tomato sauce', 'Cheese', 'Ham', 'Oregano']
    },
    {
        name: 'Hawaiian',
        toppings: ['Tomato sauce', 'Cheese', 'pineapple']
    },
    {
        name: 'Frutti di mare',
        toppings: ['Tomato sauce', 'shellfish', 'squid', 'clams', 'scampi']
    },
    {
        name: 'Margherita',
        toppings: ['Tomato sauce', 'Mozzarella', 'Basil']
    }
];

const comments = [
    {
        text: 'I love pizza',
        rating: 5
    },
    {
        text: 'Why Pineapple?',
        rating: 2
    },
    {
        text: 'I am very dissapointed with your lack of sushi pizza',
        rating: 3
    },
    {
        text: 'Hey Alexa, how many pizzas can we fit in tesla?',
        rating: 5
    },
    {
        text: 'Pizza was cold.',
        rating: 1
    },
]



// // // pizzas.forEach((pizza, index, originalArray) => (console.log(pizza, index, originalArray)));

// // pizzas.forEach((pizza) => (console.log(pizza)));

// // pizzas.forEach((pizza) => {
// //     console.log(pizza.name);
// // })


// // pizzas.forEach((pizza, index, array) => {
// //     console.log(pizza.name);
// //     if (index + 1 >= array.length) {
// //         console.log('There is no next pizzas')
// //     } else {
// //         console.log(`Next Pizza: ${array[index + 1].name}`)
// //     }
// // });

// const pizzaNames = pizzas.map((names, index) => `At ${index} it is ${names.name} pizza`);
// console.log(pizzaNames);

// const numberOfToppings = pizzas.map((toppingCount) => toppingCount.toppings.length);
// console.log(numberOfToppings)


// const values = [44, 55, 88, 77, 11, 22];
// const total = values.reduce((total, value) => (console.log(total, value), total + value), 0);
// console.log(total)


// function listOfPizzas(initials, names) {
//     return `${initials}, ${names.name}`
// };

// const allPizzas = pizzas.reduce(listOfPizzas, "We have these pizzas");
// console.log(allPizzas)

// const namesOfPizzas = pizzas.reduce((initials, names) => (`${initials}, ${names.name}`), "Here we have");
// console.log(namesOfPizzas)



const toppingAltaration = pizzas.filter((pizza) => pizza.toppings.includes("Cheese")).map((count) => count.toppings.length).reduce((results, value, index, array) => (results + value / array.length), 0);
const checkCheese = pizzas.filter((pizza) => pizza.toppings.includes("Cheese"))
console.log(toppingAltaration)

console.log(checkCheese)




// // Print fullname from the given array of objects
// const users = [
//     {
//         firstName: 'Harsh',
//         lastName: 'Kumar',
//         age: 56,
//     },
//     {
//         firstName: 'Sachindra',
//         lastName: 'Kumar',
//         age: 86,
//     },
//     {
//         firstName: 'Raman',
//         lastName: 'Rajan',
//         age: 16,
//     },
//     {
//         firstName: 'Rahul',
//         lastName: 'Kumar',
//         age: 86,
//     },
// ];

// // const fullName = users.map((name) => (`${name.firstName} ${name.lastName}`));
// // console.log(fullName);


// // const age = users.map((fullName) => (`${fullName.firstName} ${fullName.lastName}`));
// // console.log(output);

// const output = users.reduce((acc, curr) => {
//     if (acc[curr.age])
//     //if present in array object
//     {
//         acc[curr.age]++;
//     } else {
//         //if not present in array object
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})
// console.log(output);