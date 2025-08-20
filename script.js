// // // // JavaScript Fundamentals - Part 1
// // // // We'll write our code here!

// // // let js = "amazing";
// // // console.log(40 + 8 + 23 - 10);


// // // console.log("=== VARIABLES ===");
// // // let firstName = "Charles";
// // // console.log(firstName);

// // // let age = 30
// // // console.log(age);
// // // age = 30;
// // // console.log(age);

// // // const birthYear = 1991;
// // // console.log(birthYear);

// // // const PI = 3.1415;
// // // console.log(PI); 3.1415



// // // var job = "programmer";

// // // let lastName = "Sarah";
// // // let myCurrentJob = "teacher";





// // // //let 3years
// // // //let jonas&matilda
// // // //let new

// // // const country = "portugal";
// // // const language = "Portuguese"
// // // const population = 10

// // // let ageNow = 25;
// // // ageNow = 26;

// // // console.log("=== DATA TYPES ===");

// // // let weight = 45;
// // // console.log(weight); 45
// // // console.log(typeof age); 'number'

// // // let username = "Max";
// // // console.log(username); 'Max'
// // // console.log(typeof username); 'string'


// // // let javascriptisFun = true;
// // // console.log(javascriptisFun); true
// // // console.log(typeof javascriptisFun); 'boolean'

// // // let year;
// // // console.log(year); undefined
// // // console.log(typeof year); 'undefined0'

// // // let dynamicVariable = 23;
// // // console.log(dynamicVariable, typeof dynamicVariable)

// // // dynamicVariable = "Now i am a string";
// // // console.log(dynamicVariable, typeof dynamicVariable)

// // // dynamicVariable = true;
// // // console.log(dynamicVariable, typeof dynamicVariable)

// // /////////////////////////////////////////

// // // Basic Operators - Math operators
// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // console.log("Math operation:");
// // console.log("Addition:", 10 + 5);
// // console.log("Subtraction:", 20-8);
// // console.log("Multiplication:", 4 * 7);
// // console.log("Division:", 15 / 3);
// // console.log("Exponentiation:", 2 ** 3);

// // const firstName = "Jonas";
// // const lastName = "Doe";
// // console.log(firstName + '' + lastName);

// // console.log("hello" + "World" +"!" );
// // console.log("I am" + 25 + "years old");

// // console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 5;
// // console.log("x starts as:", x);

// // x += 10;
// // console.log("x starts as:, x");

// // x *= 4;
// // console.log("x starts as:", x);

// // x /= 2;
// // console.log("x starts as:", x);

// // x++;
// // console.log("x starts as:", x);

// // x--;
// // console.log("x starts as:", x);

// // ////////////////////////////////////
// // // Comparison operators
// // console.log("=== COMPARISON OPERATORS ===");

// // console.log("Age comparison:");
// // console.log(ageJonas > ageSarah); // true (46 > 19)
// // console.log(ageSarah >= 18); // true (19 >= 18)
// // console.log(ageJonas < 30); // false (46 < 30)

// // console.log("Number comparisons:");
// // console.log(25 > 20); // true
// // console.log(15 < 10); // false
// // console.log(18 >= 18); // true
// // console.log(16 <= 15); // false

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult:", isFullAge); // true

// // const isJonasOlder = ageJonas > ageSarah;
// // console.log("Jonas is older:", isJonasOlder); // true

// // Operator Precedence

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;

// // console.log(now - 1991 > now -2018);

// // let x, y;
// // x = y = 25 - 10 - 5; 
// // console.log(x, y);

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);

// // ////////////////////////////////////
// // // Coding Challenge #1 - BMI Calculator

// // // Test Data 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // MarkBMI = massMark / heightMark ** 2;
// // JohnBMI = massJohn / heightJohn ** 2;

// // const markHigherBMI = MarkBMI >= JohnBMI
// // console.log(MarkBMI);
// // console.log(JohnBMI);
// // console.log("does mark have a higher BMI then John:", markHigherBMI);

// ////////////////////////////////////
// // Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// // Any expression works inside ${}
// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`); // true

// // You can use backticks for any string
// console.log(`Just a regular string...`);

// ////////////////////////////////////
// // Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// ////////////////////////////////////
// // Truthy and Falsy Values

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Jonas")); // true
// console.log(Boolean({})); // true (empty object)
// console.log(Boolean("")); // false (empty string)

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// ////////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
 
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI is higher than John's!`);
// } else {
//     console.log(`John's BMI is higher than Mark's!`);
// }
// if (true) {
// console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// }