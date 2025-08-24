// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("===VARIABLES===")

// let firstName = "Aisha";
// console.log(firstName);

// let age = 21;
// console.log(age);
// age = 22;
// console.log(age);

// const birthYear = 2003;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// //do not use var
// var job = "Programmer";

// let lastName = "Bonoan";
// let myCurrentJob = "Developer";
// let PIZ = 3.14;

// const country = "portugal";
// const language = "Portuguese";
// const population = 10;

// let ageNow = 25;
// ageNow = 26;

// console.log("=== DATA TYPES ===");

// let weight = 45;
// console.log(weight);
// console.log(typeof age);

// //String
// let username = "Max";
// console.log(username);
// console.log(typeof username);

// //Boolean
// let javascriptisFun = true;
// console.log(javascriptisFun);
// console.log(typeof javascriptisFun);

// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now i am a string";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);


//////////////////

// // Basic Operators - Math operators
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now -2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations");
// console.log("Addition:", 10 + 5);
// console.log("Subraction:",  20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// //String concat

// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + ' ' + lastName);

// console.log("hello " + "World" + "!");
// console.log("I am " + 25 + " years old");

// // Assignment operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10;
// console.log("x starts as:", x);

// x *= 4;
// console.log("x starts as:", x);

// x /= 2;
// console.log("x starts as:", x);

// x++;
// console.log("x starts as:", x);

// x--;
// console.log("x starts as:", x);

// /////////////

// console.log("=== COMPARISON OPERATIONS ===");

// console.log("Age Comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparison:");
// console.log(25 >20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);

// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018);
// console.log(ageJonas > ageSarah);

//Operator precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);

// ///////////////

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;

// const bmiJohn = massJohn / heightJohn ** 2;

// console.log("Mark BMI:", + bmiMark);
// console.log("John BMI:", + bmiJohn);

// console.log("Does Mark have a higher BMI than John:", + bmiMark > bmiJohn);

// Strings and Template literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm $ {2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`); // true

// console.log(`this is a regular string`);

// ///////////

// //Taking decisions: if /else statements

// const age = 10;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// //////////////

// //Truthy and Falsey values
// console.log(Boolean(0)); // false
// console.log(Boolean (undefined));
// console.log(Boolean("Jonas"));


// const money = 0;

// if (money) {
//     console.log(`Don't spend it all`);
// } else {
//     console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED"); 
// }

// if (height !== undefined) {
//   console.log("Height is defined");
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// if (markHigherBMI) {
//   console.log(`Mark's BMI is higher than John's by a ${BMIMark - BMIJohn} margin`);
// } else {
//   console.log(`John's BMI is higher than Mark's by a ${BMIJohn - BMIMark} margin`);
// }

//////////////////////
// Type Conversion and Coercion

// // type conversion (manual)
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// // type coercion (automatic)
// console.log("I am " + 23 + " years old"); 
// console.log("23" - "10" - 3); 
// console.log("23" / "2"); 
// console.log("23" * "2");

// // Can you guess what these will output?
// let n = "1" + 1; // 11
// n = n - 1; // 10
// console.log(n);

// console.log(2 + 3 + 4 + "5"); // 95
// console.log("10" - "4" - "3" - 2 + "5"); // 15

// // Predict the output, then test:
// console.log("5" + 2); // 52
// console.log("5" - 2); // 3
// console.log("5" * 2); // 10
// console.log("5" / 2); // 2.5

// // Convert these explicitly:
// const userAge = "25"; // Convert to number
// const userScore = 95; // Convert to string

// console.log(Number(userAge));
// console.log(String(userScore));

// // This calculator has a bug - fix it!
// const num1 = prompt("First number:");
// const num2 = prompt("Second number:");
// // const sum = num1 + num2;
// // console.log(`Sum: ${sum}`);

// // Fixed by converting inputs to numbers
// const sum = Number(num1) + Number(num2);
// console.log(`Sum: ${sum}`);

////////////////////////////////////
// Equality Operators: === vs. ===

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18);
// console.log("18" == 18);
// console.log(18 === 18);

// console.log("0" == 0);
// console.log(0 == false);
// console.log("0" == false);
// console.log(null == undefined);

// // Weird cases that cause bugs
// console.log("" == 0); 
// console.log("   " == 0);

// // Convert explicitly, then compare strictly
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// // Not-equal operator
// if (favourite !== 23) console.log("Why not 23?");

// // Test these comparisons - predict first, then run:
// console.log(5 === "5"); // false
// console.log(5 == "5"); // true
// console.log(true === 1); // false
// console.log(true == 1); // true
// console.log(false === 0); // false
// console.log(false == 0); // true

// // This login system has bugs - fix them!
// const username = prompt("Username:");
// const password = prompt("Password:");

// // Bugs: using == instead of ===
// // if (username == "admin" && password == "1234") {
// //   console.log("Welcome admin!");
// // } else {
// //   console.log("Access denied");
// // }

// // Fix using strict equality
// if (username === "admin" && password === "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

////////////////////////////////////
// Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// // More complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP

// const age = 19; // Try different values
// const hasID = true; // Try different values
// const isVIP = false; // Try different values

// // Your logic here:
// if ((age >= 21 && hasID) || isVIP) {
//   console.log('Welcome to the club!');
// } else {
//   console.log('Sorry, you cannot enter');
// }

// const temperature = 25;
// const isRaining = false;
// const isWindy = true;

// if (temperature >= 20 && temperature <= 30 && isRaining === false && isWindy === false) {
//   console.log("Perfect day!");
// } else if (temperature >= 15 && temperature <= 35 && isRaining === false) {
//   console.log("Good day!");
// } else {
//   console.log("Stay inside!");
// }

////////////////////////////////////
// The Conditional (Ternary) Operator

// const age = 23;

// // Basic ternary: condition ? valueIfTrue : valueIfFalse
// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// // Equivalent if/else (more verbose)
// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);

// // Perfect for template literals!
// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// // ✅ Good for ternary: simple, two-option decisions
// const status = score >= 60 ? "passed" : "failed";
// const message = isLoggedIn ? "Welcome back!" : "Please log in";
// const discount = isPremium ? 0.2 : 0.1;

// // ✅ Better for if/else: complex logic with multiple statements
// if (score >= 90) {
//   console.log("Excellent!");
//   grade = "A";
//   bonus = true;
// } else if (score >= 80) {
//   console.log("Good job!");
//   grade = "B";
// }

// 1. Login status
const isLoggedIn = true;
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";

// 2. Price with discount
const isPremium = false;
let price = isPremium ? 100 * 0.8 : 100;

// Create smart responses using ternary in template literals:
const score = 85;
const weather = "sunny";
const battery = 15;

console.log(`Your score: ${score} (${score >= 75 ? "Passed" : "Failed"})`);
console.log(`Weather is ${weather} (${weather === "sunny" ? "Get some tan!" : "Stay inside"})`);
console.log(`Battery: ${battery}% (${battery < 20 ? "Please Charge" : "Safe"})`);

const bills = [275, 40, 430];

for (const bill of bills) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}

////////////////////////////////////
// Coding Challenge #4

// Coding Challenge #4

//const bill = 275;
//const bill = 40;
const bill = 430;

// Step 1: Create the tip calculation using ternary operator
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
