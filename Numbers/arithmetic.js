console.log('ARITHMETIC OPERATIONS');
// ------------------------------------------------------------------

// Arithmetic Operations

// + addition, - subraction, * multiplication, / division, ** exponentation, % remainder

console.log("Addition +");
// In + addition
// add two or more numbers
// Order of numbers does not matters

const num1 = 10;
const num2 = 20;
const num3 = 5;

const result1 = num1 + num2;
const result2 = num2 + num3;
const result3 = num1 + num2 + num3;

console.log(result1);
console.log(result2);
console.log(result3);

// -----------------------------------------
console.log("Subraction -")
// In - Subraction
// difference b/w tow or more numbers
// usually smaller from larger number

const difference = 500 - 25;
console.log(difference);

// if smaller number comes first, answer will be negative
const difference2 = 10 - 25;
console.log(difference2);

// also assign value in variable then subtract 

const numdif1 = 500;
const numdif2 = 200;

const result4 = numdif1 - numdif2;
console.log(result4);

// ------------------------------------------
console.log("Multiplication *")

// In * Multiplication
// product of two or more numbers
// Order of number does not matters

const nummulti1 = 10;
const nummulti2 = 20;
const nummulti3 = 5;

const resultmulti1 = nummulti1 * nummulti2;
const resultmulti2 = nummulti2 * nummulti3;
const resultmulti3 = nummulti1 * nummulti2 * num3;

console.log(resultmulti1);
console.log(resultmulti2);
console.log(resultmulti3);

// ----------------------------------------
console.log("Division /")

// In / Division
// Order of numbers matters

const numdiv1 = 10;
const numdiv2 = 5;
const numdiv3 = 15;

const resultdiv1 = numdiv1 / numdiv2;
const resultdiv2 = numdiv2 / numdiv1;
const resultdiv3 = numdiv1 / numdiv2 / numdiv3;

console.log(resultdiv1);
console.log(resultdiv2);
console.log(resultdiv3);

// IMPORTANT: if try to divide by zero , it give a INFINITY

const result = 10 / 0;
console.log(result);

// -------------------------------------------
console.log("Remainder %");

// In % Remainder
// Returns remainder value after performing divison

const numpow1 = 2;
const numpow2 = 3;

const exponent = numpow1 ** numpow2;
console.log(exponent);

// -----------------------------------------------------------------------------