// Function to return name
function sayHello(name) {
    return "Cześć, " + name + "!";
}
let userName = prompt("Podaj swoje imie:");
console.log(sayHello(userName));

// Function to add number
function add(a, b) {
    return a + b;
}

let firstInput = prompt("Podaj pierwszą liczbę:");
let secondInput = prompt("Podaj druga liczbę:");

let num1 = parseFloat(firstInput);
let num2 = parseFloat(secondInput);

let result = add(num1, num2);
console.log("Suma: " + result);
