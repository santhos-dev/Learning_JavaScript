console.log("Strings");
// --------------------------------------------------------------
// STRINGS AND IMMUTABILITY 

// either single quotes or double quotes

let correctWay = 'This is single quotes string';
console.log(correctWay);

let alsoCorrect = "This is double quotes string";
console.log(alsoCorrect);

// --------------------------------------------------------------

// REASSIGN A NEW VALUE

let usr = 'Sandy';
usr = 'Santhosh';  //new value

console.log(usr);

// ---------------------------------------------------------------

// STRING CONCATENATION

// Use + , += , concat()

// +
let studentName = 'Santhosh';
let studentAge = 23;
let studentInfo = studentName + " is " + studentAge + " years old.";

console.log(studentInfo);

// +=
// join or append a string variable
let message = "Welcome Santhos";
message += ' Sandy';

console.log(message);

// concat() method
// Join two or more strings together

let firstName = 'Santhosh';
let lastName = 'Sowmiya';

let fullName = firstName.concat( " ", lastName);
console.log(fullName);

// ----------------------------------------------------------------




