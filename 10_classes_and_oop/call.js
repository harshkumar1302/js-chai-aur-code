function setUsername(username) {
    this.username = username;
    console.log(`called`);
}

function createUsername(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new createUsername('chai', 'har@fb.com', 'hyeiol')
console.log(chai)