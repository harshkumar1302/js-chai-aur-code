class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return `${this._password.toUpperCase()}harsh`;
    }

    set password(value) {
        this._password = value;
    }
}


const harsh = new User("harsh@google.com", "abc");

console.log(harsh.password);