//CREATING AND CONSUMING PROMISE

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Aysnc task compeleted");
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed")
});


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Aysnc 2 compeleted")
        resolve();
    }, 1000)
}).then(function () {
    console.log("Promise 2 also consumed")
})



const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "chai@example.com" });
    }, 1000);
});


promiseThree.then((user) => { console.log(user.username) });




const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ userName: "Harsh", password: "123qwe" })
        } else {
            reject("ERROR! JS went wrong")
        }
    }, 1000)
})


promiseFour.then((user) => {
    return user.userName;
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err)
});



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ userName: "kumar", password: "123" })
        } else {
            reject("ERROR! JS went wrong")
        }
    }, 1000)
});



async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
};

consumePromiseFive();




// async function consumePromiseSic() {
//     try {
//         const response = await fetch('https://api.github.com/users/harshkumar1302');
//         // console.log(response);
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log("E:", error)
//     }
// }


// consumePromiseSic();



fetch('https://api.github.com/users/harshkumar1302')
    .then(response => response.json())
    .then((data) => { console.log(data) })
    .catch((error) => console.log(error))