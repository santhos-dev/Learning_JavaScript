console.log("Conditional Statement");
// ---------------------------------------------------------------------------

// run code based on certain conditions
// if, else if, else

// Truthy values - result in true

/*
1. non-empty strings like 'hello'
2. any number other than 0 and -0 , for example -4,5 and others
3. arrays
4. objects
5. boolean true 
*/

// Falsy value - return a false 

/*
1. boolean false
2. 0 (zero)
3. "" (empty strings)
4. null
5. undefined
6. NaN (Not a number)
*/

// -------------------------------------------

// Example 1

// false

if (null) {
    console.log("This will not run.");
}

// true

if ("Hello world"){
    console.log("This will run.");
}

// --------------------------------------------

// Example 2

const age = 22;

if (age >= 18){
    console.log("You're elligible to vote.");
}else{
    console.log("You're not elligible to vote.");
}


// ---------------------------------------------

// For multiple conditions we use else if 

const score = 87;

if (score >= 90) {
    console.log("You got a A.");
}else if(score >= 80) {
    console.log("You got a B.");
}else if(score >= 70){
    console.log("You got C.");
}else{
    console.log("You failed!..You need to study more.");
}

// --------------------------------------------------

// Ternary operator - compact way to write simple if/else statements

// Basic syntax

// conditon ? expressionIsTrue : expressionIsFalse;

let temperature = 20;
const weather = temperature > 25 ? 'Sunny' : 'Cold';

console.log(`It's a ${weather} day!`);

// ---------------------------------------------------

// For multiple condition - use if/else if/else
// For Simple condition - use ternary operator

// ======================================================================