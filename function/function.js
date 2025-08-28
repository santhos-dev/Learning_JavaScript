console.log("Functions");
// ------------------------------------------------------------------------------------

// Functions - reusable piece of code that perform specific task or calculate a value.

// ----------------------------------------

// Function without parameters and arguments

function greet() {
    console.log("Hello, Santhosh");
}

greet();

// ----------------------------------------

// With parameters and arguments

function greet2(name) {
    console.log("Hello, " + name + "!");
}

greet2("Sandy");
greet2("Kandy");

// name serve as a parameter & sandy and kandy as a arguments

// ----------------------------------------

// Default return value is undefined

function doSomething() {
    console.log();
}

let result = doSomething();
console.log(result);

// ----------------------------------------

// Using return to get specific value

function calculateSum(num1, num2) {
    return num1 + num2;
}

console.log(calculateSum(20, 5));

// ----------------------------------------

// Anonymous function - without a name that can be assigned to a variable 

const sum = function (num3, num4) {
    return num3 + num4;
}

console.log(sum(50, 50));

// ----------------------------------------

// We can set default paramater with value

function greetings(name = "Guest") {
    console.log("Hello, "+ name + "!");
}

greetings();
greetings("Santhos");

// ---------------------------------------
