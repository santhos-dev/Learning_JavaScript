console.log("Data types")

// -------------------------------------------

// Primitive datatypes

// 1. Number

// Both Integer (25,2,5) and floating numbers (2.5,000.1)

const num1 = 25;
console.log(num1);
console.log(typeof num1);

const num2 = 25.25;
console.log(num2);
console.log(typeof num2);

// ------------------------------------------

// 2. Strings

// Sequence of characters or text
// Enclosed in either single or double quotes
// Immutable 

const str1 = "I like Coding"; // Double quotes
console.log(str1);
console.log(typeof str1);

const str2 = "JavaScript is fun";  // Single quotes
console.log(str2);
console.log(typeof str2);


// -----------------------------------------

// 3. Boolean

// Either True or False
// use for conditions

const isLogged1 = true;
console.log(isLogged1);
console.log(typeof isLogged1);

const isLogged2 = false;
console.log(isLogged2);
console.log(typeof isLogged2);

// -----------------------------------------

// 4. Undefined 

// value has been declared but not assigned

let undefn;
console.log(undefn);
console.log(typeof undefn);

// ----------------------------------------

// 5. Null

// Empty value
// NOTE: It returns object type but it's official javascript bug or error

const empty = null;
console.log(empty);
console.log(typeof empty);


// ---------------------------------------

// 6. Object

// Collection of key-value pairs.
// key - Property name
// Value - Property value

let book = {
    author: "James Clear",
    title: "Atomic Habit",
    published: 2018
};

console.log(book);
console.log(typeof book);

// -----------------------------------------


// 7. Symbol

// Unique and immutable
// Use Identifer for object properties

const cryptickey1 = Symbol("saltNpepper");
const cryptickey2 = Symbol("saltNpepper");

console.log(cryptickey1 === cryptickey2);
console.log(typeof cryptickey1);
console.log(typeof cryptickey2);

// ---------------------------------------------------

// 8. Bigint

// Big number
// Integer of arbitary length
// Use for long numbers

// by ADDING n to the end of number to create bigint

const verBigNumber = 123456789012345678901234567890n;
console.log(verBigNumber);
console.log(typeof verBigNumber);

// --------------------------------------------------
