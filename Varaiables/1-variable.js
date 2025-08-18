
console.log("Learning Variables");

// let

let cityName;

cityName = "Tamil Nadu";
console.log(cityName);

// Can reassign a new value

cityName = "Salem";
console.log(cityName);

// -------------------------------------------

// Const - once a value is assigned we cannot change.

// const userName;  //Must be intialied 

const userName = "Sandy";

console.log(userName);

// Can not be reassigned or redeclared

// userName = "Santhosh";  //Uncaught TypeError: Assignment to constant variable.

// --------------------------------------------

// Var

// also use var keyword to declare variable 
// It is global scope
// Its not recommended to use 

var valueVar = 2000;
console.log(valueVar);

// -------------------------------------------


// VARIABLE NAMING RULES

// 1. Descriptive and meaningful
// 2. Use camelcase like cityName, isLogged, veryBigNumber.
// 3. Do not stsrt with numbers 
// 4. Always start with letters, $ (Dollar sign) and _ (Underscore)
// 5. Should not be reserved words like let, const
// 6. Case-Senstivie - age and AGE are different not same.