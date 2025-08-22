////////////////////////////////////
// Type Conversion and Coercion

// type conversion (manual)
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991, "1991"
console.log(Number(inputYear) + 18); // 2009

console.log(Number("Jonas")); // NaN (Not a Number)
console.log(typeof NaN); // "number" (weird but true!)

console.log(String(23), 23); // "23", 23
console.log(typeof String(23)); // "string"

// type coercion (automatic)
console.log("I am " + 23 + " years old"); // "I am 23 years old"
console.log("23" - "10" - 3); // 10 (strings become numbers)
console.log("23" / "2"); // 11.5 (division converts to numbers)
console.log("23" * "2"); // 46 (multiplication converts to numbers)

// Can you guess what these will output?
let n = "1" + 1; // What do you think?
n = n - 1; // What about now?
console.log(n);

console.log(2 + 3 + 4 + "5"); // Try to guess!
console.log("10" - "4" - "3" - 2 + "5"); // This one's tricky!


// Predict the output, then test:
console.log("5" + 2); // Your guess: ?
console.log("5" - 2); // Your guess: ?
console.log("5" * 2); // Your guess: ?
console.log("5" / 2); // Your guess: ?

// Convert these explicitly:
const userAge = "25"; // Convert to number
const userScore = 95; // Convert to string
// Your code here...


// This calculator has a bug - fix it!
const num1 = prompt("First number:"); // Returns string!
const num2 = prompt("Second number:"); // Returns string!

// Convert the input strings to numbers
const num1Converted = parseFloat(num1);
const num2Converted = parseFloat(num2);

// Check if the conversion is successful
if (isNaN(num1Converted) || isNaN(num2Converted)) {
    console.log("Please enter valid numbers. Refresh the page and try again.");
} else {
    const sum = num1Converted + num2Converted;
    console.log(`Sum: ${sum}`);
}

////////////////////////////////////
// Equality Operators: == vs. ===

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

// Let's see what happens:
console.log("18" === 18); // false - different types
console.log("18" == 18); // true - coercion happens
console.log(18 === 18); // true - same type and value

// Why == can be dangerous
console.log("0" == 0); // true (string converted)
console.log(0 == false); // true (boolean converted)
console.log("0" == false); // true (both converted!)
console.log(null == undefined); // true (special case)

// Weird cases that cause bugs
console.log("" == 0); // true
console.log("   " == 0); // true (spaces trimmed!)

// Convert explicitly, then compare strictly
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

// Not-equal operator
if (favourite !== 23) console.log("Why not 23?");

// Test these comparisons - predict first, then run:
console.log(5 === "5"); // Your guess: ?
console.log(5 == "5"); // Your guess: ?
console.log(true === 1); // Your guess: ?
console.log(true == 1); // Your guess: ?
console.log(false === 0); // Your guess: ?
console.log(false == 0); // Your guess: ?

// This login system has bugs - fix them!
const username = prompt("Username:");
const password = prompt("Password:");

// Fix using strict equality
if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}

////////////////////////////////////
// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND: both must be true
console.log(hasDriversLicense || hasGoodVision); // OR: one must be true
console.log(!hasDriversLicense); // NOT: inverts the value

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// More complex scenarios
const age = 20;
const hasPermission = true;
const hasExperience = false;

// Can drive if: (age >= 18 OR has permission) AND has experience
if ((age >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}

// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP

const age = 19; // Try different values
const hasID = true; // Try different values
const isVIP = false; // Try different values

// Your logic here:
// if (...) {
//   console.log('Welcome to the club!');
// } else {
//   console.log('Sorry, you cannot enter');
// }

// Create a weather advisor:
const temperature = 25; // Celsius
const isRaining = false;
const isWindy = true;

// Advice rules:
// Perfect day: temp 20-30 AND not raining AND not windy
// Good day: temp 15-35 AND not raining
// Stay inside: anything else

// Your code here...

// Perfect for template literals!
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// You cannot use if/else inside template literals!
// This would NOT work:
// console.log(`I like to drink ${if (age >= 18) 'wine' else 'water'}`);


const status = score >= 60 ? "passed" : "failed";
const message = isLoggedIn ? "Welcome back!" : "Please log in";
const discount = isPremium ? 0.2 : 0.1;


if (score >= 90) {
  console.log("Excellent!");
  grade = "A";
  bonus = true;
} else if (score >= 80) {
  console.log("Good job!");
  grade = "B";
} // ... etc

// Convert these if/else to ternary operators:

// 1. Login status
const isLoggedIn = true;
let welcomeMessage;
if (isLoggedIn) {
  welcomeMessage = "Welcome back!";
} else {
  welcomeMessage = "Please sign in";
}
// Ternary version: ?

// 2. Price with discount
const isPremium = false;
let price;
if (isPremium) {
  price = 100 * 0.8; // 20% discount
} else {
  price = 100;
}
// Ternary version: ?

// Create smart responses using ternary in template literals:
const score = 85;
const weather = "sunny";
const battery = 15; // percentage

const bill = 275; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);