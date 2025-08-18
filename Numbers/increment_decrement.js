console.log("INCREMENT AND DECREMENT OPERATOR");
// ------------------------------------------------------------------

// Increment operator - ++
// Decrement operator - --
// Both allow you to adjust value of a variable by 1.

// Two forms in Increment and Decrement
// Prefix and Postfix

// Prefix in both
// Increase or decrease a value first, then returns a new value.
// ++X and --X

// Postfix
// Returns a current value of variable at first, then increase it.
// X++ and X--

// ------------------------------------------
console.log("INCREMENT");
// INCREMENT
// In Prefix

let x = 10;

console.log(++x);
console.log(x);

// In Postfix

let y = 5;

console.log(y++);
console.log(y);

// ------------------------------------------
console.log("DECREMENT");
// DECREMENT

// In Prefix
let z = 5;

console.log(--z);
console.log(z);

// In Postfix
let w = 10;

console.log(w--);
console.log(w);

// ------------------------------------------

// When use prefix or postfix?

// If you need the updated value right away, use prefix

// If you need current value first and you don't care about increment or decrement untill later , then use postfix

// ------------------------------------------------------------------------------

// If the result of incrrment/decrement not used, there is no difference in form 

let counter = 0;
counter++;
++counter;
console.log(counter);   //  2

// -------------------------------------------------------------------
console.log("INCREMENT/DECREMENT AMONG OTHER OPERATORS")

// It's precedence is higher order than most other operators

let counter1 = 1;
console.log( 2 * ++counter1);   //++counter1 now increment by 1 so now its 2

let counter2 = 1;
console.log(2 * counter2++);


// For readbility "one line - one action"

let counter3 = 1;
console.log(2 * counter3);
counter3++;

// =====================================================================

