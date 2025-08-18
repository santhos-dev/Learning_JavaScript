console.log("Basic Operators, maths");
// ---------------------------------------------------------------------
// Operand, unary, binary
console.log("Operand, Unary, Binary");
// Operand

let ex = 5 * 2; // 5 is left operand and 2 is right operand or also called arguments
console.log(ex); 

// Unary - Single operand

let ex2 = 1;
ex2 = -ex2; // Unary negation was applied

console.log(ex2);

// Binary

// if operand has two operands , then binary form exists

let ex3 = 5 - 2; // Binary minus is applied
console.log(ex3);

// ---------------------------------------------------------------------
console.log("Math");

/*
    Addition +
    Subtraction -
    Multiplication *
    Division /
    Remainder %
    Exponentation **
*/
// ---------------------------------------

// Remainder %

//  the remainder of the integer division.
console.log(5 % 2);
console.log(8 % 3);

// --------------------------------------

// Exponentation **

// raises a to the power of b

console.log(2 ** 2);
console.log(2 ** 3);

// also (Square root and cube root);

console.log( 4 ** (1/2) );
console.log(8 ** (1/3));
// =======================================================================

console.log("String concatenation with binary +");

// String concatenation with binary +

// If binary + is applied to strings, it concatenates them

let S = "Hello " + "World";
console.log(S); // String

// If any of the operand is strings, the other also convert into strings

console.log(1 + '2'); //12
console.log('2'  + 12); // 212

// Complex examples

console.log( 2 + 2 + '1');  //  '41'
// FLow --> left to right 

console.log('2' + 1 + 1);   //  '221'


// But other binary operators works in normal way like -, * , / , % , **

// Binary minus

console.log( '50' - '25');  //  both converted into number before calculation
console.log( '6' / '2');

// ==========================================================================

console.log("Numeric conversion, Unary +");
// -----------------------------------------

// If + is applied to single value number doesn't do anything

let x1 = 1;
console.log(+x1);   //  No effect

let y1 = 2;
console.log(-y1);   //  Unary - negation is applied 

// If the operand is not a number, unary + converts into numbers

console.log(+true); // 1
console.log(+false);    //  0

console.log(+'');   //  0
console.log(+"Sandy");  // NaN

// Example

// In Binary +

let apples = '2';
let oranges = '4';

console.log(apples + oranges);  //  '24' strings

// In Unary +

console.log( +apples + +oranges);   // 6 number

// In Longer Variant

console.log( Number(apples) + Number(oranges) );

//==================================================================================
console.log("Order Precedence");
// -----------------------------

// If an expression has more than one operator, javascript use order precedence (priority)

// Like VBODMAS Rule

let eq1 = 5 * 2 + 20;   //  5*2 = 10 and then add 10 + 20 = 30
console.log(eq1);

// Use parentheses to override a rule

let eq2 = (5 + 2) * 2;  //  first 5+2 = 7, then 7 * 2 = 14
console.log(eq2);

// Order Precedence Table

/*
    14  unary plus  +
    14  unary negation  -
    13  exponentation   **
    12  Multiplication  *
    12  Division    /
    11  Addition    +
    11  Subtraction -
    2   Assignment  =
*/

// Unary has higher order 

// Assignment has very lower order

// ===================================================================================

console.log("Assignment");

// Assignment

// = assignment is also a operator with low priority of 2 

// that why, first value is calculated and then store to variable by = assignment operator

let assign1 = 2 * 2 + 1;
console.log(assign1);

// Assognment = returns a value

// The call x = value, writes value into x and then returns it 

// Complex expression (not recommended)
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a); //  3
console.log(c); //  0

// -------------------------------------------------
// Chaining assignments
console.log("Chaining assigment");

let a1, b1, c1;

a1 = b1 = c1 = 2 + 2;   //  right to left evaluation

console.log(a1);
console.log(b1);
console.log(c1);

// For easier readbility

/*
c = 2 + 2;
a = c;
b = c;
*/

// ----------------------------------------------------
console.log("Modify - in place")
// Modify in place

// let n = 2;
// n = n + 5;
// n = n * 2;

// console.log(n);

// Shorten method += , -= etc

let n =2;
n += 5;
n *= 2;

console.log(n);

// another example
let n1 = 2;

n1 *= 3 + 5;    //  evalute right to left
console.log(n1);

// ============================================================================

console.log("");
