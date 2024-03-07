const user = {
    username: 'harsh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log(`Username: ${this.username}`)
    }
}

console.log(user.getUserDetails());


function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greetings = function () {
        return `Welcome: ${this.username}`
    }
    return this;
}

const userOne = new User("kumar", 6, true);
const userTwo = new User("suman", 42, false);
console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor);
console.log(userTwo.greetings());
