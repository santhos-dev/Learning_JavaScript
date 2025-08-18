console.log("Order Precedence");

// Determines the order of which operation are evaluated in an expressions.

// --------------------------------------------------------------------

// Multiplication and division are higher order than addition and subtraction 

// In Multipication
const sum = 1 + 2 * 3;
console.log(sum);

// ---------------------------------

// In Division
const sum1 = 2 + 6 / 3;
console.log(sum1);

// --------------------------------

// we can overwrite a order of precendence by using parentheses () 

const sum2 = (1 + 2) * 3;
console.log(sum2);

// -------------------------------------------------------------------------
console.log("Associativity");
// Associativity
// Tells js to evaluate from LEFT TO RIGHT or RIGHT TO LEFT

// For mostoperator like addition and multiplication - LEFT TO RIGHT

const result = 10 - 2 + 3;
console.log(result);

// ------------------------

// Some operator like assignment (=) - RIGHT TO LEFT

let a, b;
a = b = 5;

console.log(a);
console.log(b);
console.log(a + b);

// -----------------------

// Exponent - RIGHT TO LEFT

const result2 = 2 ** 3 ** 2;
console.log(result2);

// ----------------------------------------------------------------------