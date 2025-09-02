console.log("Scopes in JavaScript");
// Global Scope, Local Scope, Block Scope
// ---------------------------------------------------------------------------

// Global Scope
//  accessible from anywhere in your code , akso inside functions and blocks

let globalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(globalVar);
}

printGlobalVar();

// --------------------------------------

// Local Scope
// only accessible within a function

function greet() {
    let message = "Hello, local scope!";
    console.log(message);
};

greet();    // Local Scope

// console.log(message);   //  This will throw an error

// ---------------------------------------

// Block Scope

// Block scope is a concept introduced with the let and const keywords in ES6.

// A block is any code section within curly braces, {}, such as in if statements, for loops, or while loops.

// Variables declared with let or const inside a block are only accessible within that block.

if (true) {
    let blockVar = 'Hi, Block scope';
    console.log(blockVar);
};

// console.log(blockVar);   //  Thil will throw an error 


// ---------------------------------------------------------------------------
