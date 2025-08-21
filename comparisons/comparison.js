console.log("Comparisons");
// -----------------------------------------------------------------------------
// Basic Operations

// greater than

let a = 100;

if (a > 25){
    console.log("Correct");
}else{
    console.log("Wrong");
}

// ----------------------
// less than

let b = 60;

if (b < 50) {
    console.log("Correct");
} else{
    console.log("Wrong");
}

// ---------------------
// greater than or equal

let c = 50;

if (c >= 40) {
    console.log("Correct");
} else {
    console.log("Wrong");
}

// ---------------------
// less thsn or equal

let d = 100;

if (d <= 99) {
    console.log("Correct");
} else {
    console.log("Wrong");
}

// ------------------------------------------------------------------------------
console.log("Equality and Strict Equality ");

// Equality ( == , === )

// Equality Operator - checks only value (does type conversion if needed)

console.log(5 == '5');     //  (same value, type is converted)

// ------------------------

// Strict Equality Operator === - checks value + type (no type conversion)

console.log(5 === '5');     //  (number vs string, type different)


// -------------------------------------------------------------------------------
console.log("Comparison with Different Types");

console.log("2" > 1);   // true  (string "2" becomes number 2)

console.log(true == 1); // true  (true becomes 1)

console.log(false == 0); // true (false becomes 0)

// ---------------------------------------------------------------------------------

console.log("Not Equal Operators in JavaScript");

// Loose Not Equal (!=) - Checks only the value , Does type conversion if needed

console.log( 5 != "5");   // false (because "5" becomes 5, so they are equal)
console.log( 5 != 6 );    // true

// -----------------------------

// 2. Strict Not Equal (!==) - Checks both value and type ❌ No type conversion

console.log( 5 !== "5" );  // true (number vs string → different types)
console.log( 5 !== 5 );    // false (same type and value)

// --------------------------------------------------------------------------------

console.log("String Comparision");

// How JavaScript Compares Strings

// Strings are compared character by character.

// Comparison is based on Unicode values (the internal code numbers of characters).

// It’s similar to dictionary order, but with strict case sensitivity.

console.log("Z" > "A");       // true  (because 'Z' comes after 'A')
console.log("Glow" > "Glee"); // true  (same G, same l, but 'o' > 'e')
console.log("Bee" > "Be");    // true  ('Bee' is longer after 'Be')

// Case Matters

console.log("a" > "Z");  // true (because Unicode of 'a' is 97, 'Z' is 90)
console.log("A" > "a");  // false

// The Algorithm (Step by Step)

// 1. Compare the first characters.

// 2. If they are different → result is decided.

// 3. If they are the same → move to the next character.

// 4. Continue until one string ends.

// 5. If all characters are the same, the longer string wins.

/*
Unicode Order

'A' → 65

'Z' → 90

'a' → 97

'z' → 122

That’s why "a" > "Z" is true.

*/

// --------------------------------------------------------------------------------
console.log("Special Case: null and undefined");

