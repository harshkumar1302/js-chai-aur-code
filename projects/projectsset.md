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