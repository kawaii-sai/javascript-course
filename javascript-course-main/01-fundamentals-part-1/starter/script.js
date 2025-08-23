// Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");

console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("5" / 2);

const userAge = "25";
const userScore = 95;

// Explicit type conversion
const convertedAge = Number(userAge);
const convertedScore = String(userScore);

// Calculator Bug Fix
const num1 = parseFloat(prompt("First number:"));
const num2 = parseFloat(prompt("Second number:"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers.");
} else {
    const sum = num1 + num2;
    console.log(`Sum: ${sum}`);
}

// Equality Operators: == vs. ===
const age = "18";
if (age === "18") console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

console.log("18" === 18);
console.log("18" == 18);
console.log(18 === 18);

console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);
console.log(null == undefined);

console.log("" == 0);
console.log("   " == 0);

const favourite = Number(prompt("What's your favourite number?"));

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

console.log(5 === "5");
console.log(5 == "5");
console.log(true === 1);
console.log(true == 1);
console.log(false === 0);
console.log(false == 0);

// Login System Fix
const username = prompt("Username:");
const password = prompt("Password:");

if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}

// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const age = 20;
const hasPermission = true;
const hasExperience = false;

if ((age >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}

const age = 19;
const hasID = true;
const isVIP = false;

if ((age >= 21 && hasID) || isVIP) {
  console.log('Welcome to the club!');
} else {
  console.log('Sorry, you cannot enter');
}

const temperature = 25;
const isRaining = false;
const isWindy = true;

if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log('Perfect day');
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log('Good day');
} else {
  console.log('Stay inside');
}

// Ternary Operators
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
let price = isPremium ? 100 * 0.8 : 100;

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);