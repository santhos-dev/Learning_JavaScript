console.log("Arrow Function");
// -------------------------------------------------------------------

// Arrow function - to refactor a normal function 

const greetings = (name) => {
    console.log("Hello, " + name + "!");
};

greetings("Success");

// -------------------------------------

// If parameter has only one parameter, then remove parentheses

const greetings2 = name2 => {
    console.log("Hello, " + name2 + "!");
}

greetings2("Sandy");

// -------------------------------------

// arrow function with no parameters

const greetings3 = () => {
    console.log("Hello");
};

greetings3();

// -------------------------------------
// If your function body only contains a single line of code, remove curly braces

const greetings4 = name3 => console.log("Hello, " + name3 + "!");

greetings4("Santhos");

// -------------------------------------

// Arrow function with return statement

const calculateArea = (width, height) => {
    const area = width * height;
    return area;
}

console.log(calculateArea(5, 3));

// -------------------------------------

// Uncaught SyntaxError: Unexpected token 'return'
/*
const calculateArea2 = (width, height) => return width*height;

*/

// Correct way

const calculateArea3 = (width, height) => width * height;

console.log(calculateArea3(2, 3));

// ---------------------------------------------------------------------------

