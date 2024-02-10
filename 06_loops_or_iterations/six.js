

// const coding = ["js", "cpp", "java", "python", "swift"]

// // coding.forEach((item) => {
// //     console.log(item)
// // })


// // forEach doesn't returns value
// const newLang = coding.forEach((item) => {
//     console.log(item)
// })
// console.log(newLang) // here we will get undefined 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// // // there for we use filter
// // // using filter
// // const newNums = myNums.filter((num) => num > 4);
// // console.log(newNums);


// // // using forEach
// // const newNum2 = []
// // myNums.forEach((num) => {
// //     if (num < 5) {
// //         return newNum2.push(num);
// //     }
// // })
// // console.log(newNum2);



const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008
    },
    {
        title: 'Book Three', genre: 'History', publish: 1999, edition: 2007
    },
    {
        title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010
    },
    {
        title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014
    },
    {
        title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010
    },
    {
        title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996
    },
    {
        title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016
    },
    {
        title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989
    }
]

const userProfile = books.filter((book) => book.genre === 'Fiction')
console.log(userProfile)

const userPro = [];
books.forEach((item) => {
    if (item.genre === 'Fiction') {
        userPro.push(item.title);
    }
})

console.log(`The user has these Books = ${userPro}`)