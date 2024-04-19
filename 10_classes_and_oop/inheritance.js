class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username); // this calls from the parent class = force inheritance

        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }

}

const chai = new Teacher("chai", "hgy@Torrent.com", "123")
// console.log(chai)

chai.addCourse();
chai.logMe();

const masalaChai = new User("masalaChai");

masalaChai.logMe();


console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);