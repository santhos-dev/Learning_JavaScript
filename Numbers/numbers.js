console.log("NUMBERS");
// -----------------------------------------------------

// Number and it's data type values

// can be positive or negative integer, zero, floating numbers and special cases like INFINITY and NaN

// Integers

const num1 = -25;
console.log(num1);
console.log(typeof num1);

const num2 = 25;
console.log(num2);
console.log(typeof num2);

// ---------------------

// Floats

const floatNum1 = 20.25;
console.log(floatNum1);
console.log(typeof floatNum1);

// ---------------------

// INFINITY

const noLimit = 1 / 0;
console.log(noLimit);
console.log(typeof noLimit);

const noLimitDirect = Infinity;     //direct infinity value
console.log(noLimitDirect);
console.log(typeof noLimitDirect);

// ------------------------

// NaN

const notNum = 'hello' / 2;
console.log(notNum);
console.log(typeof notNum);

const notNum2 = 'hello' / 'world';
console.log(notNum2);
console.log(typeof notNum2);

// -----------------------

// Boolean type

// true becomes 1
// false becomes 0

// true
const booCalc = true + 2; 
console.log(booCalc);
console.log(typeof booCalc);

// false
const booCalc2 = false + 2; 
console.log(booCalc2);
console.log(typeof booCalc2);

// -----------------------------------------------------------------

console.log("TYPE CORECION")

// TYPE CORECION

// type corecion occurs before a calculation

// Number convert into string before calculation ( only in + operator )
const numStr = '20' + 25;
console.log(numStr);
console.log(typeof numStr);

// In - operator
const numStr2 = '50' - 25;
console.log(numStr2);
console.log(typeof numStr2);

// In / operator
const numStr3 = '100' / '2';
console.log(numStr3);
console.log(typeof numStr3);

// In * operator
const numStr4 = '25' * 25;
console.log(numStr4);
console.log(typeof numStr4);

// In NaN
const numStr5 = 'Santhos' + 25;
console.log(numStr5);
console.log(typeof numStr5);

// -------------------------------------------------------------------

// JavaScript also supports base 2 system (Binary 0 and 1), base 8 system (Octal 0 to 7), base 16 system (Hexadecimal 0 to 9, a to f)
