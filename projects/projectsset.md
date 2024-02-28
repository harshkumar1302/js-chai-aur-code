## project link	
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)	

# Solution codes	

## project 01	

```javascript	

console.log("Solution Done")	
const buttons = document.querySelectorAll(".button");	
// console.log(buttons);	
const body = document.querySelector("body");	
// console.log(body)	

buttons.forEach((button) => {	
    console.log(button);	
    button.addEventListener("click", (event) => {	
        // console.log(event);	
        // console.log(event.target);	
        if (event.target.id === "grey") {	
            body.style.backgroundColor = event.target.id	
        } else if (event.target.id === "white") {	
            body.style.backgroundColor = event.target.id	
        } else if (event.target.id === "blue") {	
            body.style.backgroundColor = event.target.id	
        } else if (event.target.id === "yellow") {	
            body.style.backgroundColor = event.target.id	
        } else if (event.target.id === "purple") {	
            body.style.backgroundColor = event.target.id	
        }	

    });	

});	


```	


## project 02	

``` javascript 	

const form = document.querySelector("form");	
// console.log(form);	
form.addEventListener('submit', (event) => {	
    event.preventDefault();	

    const height = parseInt(document.querySelector("#height").value);	
    // console.log(height);	
    const weight = parseInt(document.querySelector("#weight").value);	
    const results = document.querySelector("#results");	

    if (height === '' || height < 0 || isNaN(height)) {	
        results.innerHTML = `Please give a valid height in number = ${height}`;	
    } else if (weight === '' || weight < 0 || isNaN(weight)) {	
        results.innerHTML = `Please give a valid weight in number = ${weight}`;	
    } else {	
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);	
        results.innerHTML = `<span>${bmi}</span>`	

        if (bmi < 18.6) {	
            results.innerHTML = `<span>${bmi}</span> <p>You are under weight.</p>`	
        } else if (bmi >= 18.6 && bmi <= 24.9) {	
            results.innerHTML = `<span>${bmi}</span> <p>you fall in Normal Range.</p>`	
        } else if (bmi > 24.9) {	
            results.innerHTML = `<span>${bmi}</span> <p>you are OverWeight.</p>`	
        }	
    }	
});	


```	


## project 03

``` javascript


const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```


## project 04

``` javaScript


let randomNumber = parseInt((Math.random() * 100 + 1));
console.log(randomNumber);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");


let prevGuess = [];
let numGuess = 1;
let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid Number.`);
    } else if (guess < 1) {
        alert(`Entered number is less than 1.`)
    } else if (guess > 100) {
        alert(`Entered number is more than 100.`)
    } else {
        prevGuess.push(guess);
        if (numGuess > 10) {
            cleanUpGuess(guess);
            displayMessage(`Game Over. The number was ${randomNumber}`);
            endGame();
        } else {
            cleanUpGuess(guess);
            checkGuess(guess);
        }
    }
};


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Yeah! You guessed it right.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`The number is TOOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`The number is TOOO high`)
    }
};


function cleanUpGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
};


function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
};


function endGame() {
    userInput.value = '';
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame" style="cursor: pointer">Start new Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
};


function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt((Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute(`disabled`);
        startOver.removeChild(p);
        playGame = true;
    })
};


```