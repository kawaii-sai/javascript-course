'use strict';

/*
  Fixed version:
  - renamed conflicting identifiers (no duplicate `outer`)
  - replaced direct structuredClone calls with safeClone fallback
  - removed/caught calls that would throw because `this` was unbound
  - wrapped DOM code with a check for `document`
*/

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// Utility: safeClone (uses structuredClone if available, otherwise JSON fallback)
function safeClone(obj) {
  if (typeof structuredClone === 'function') {
    return structuredClone(obj);
  }
  // JSON fallback (note: will lose functions and convert Dates to strings)
  return JSON.parse(JSON.stringify(obj));
}

// -------------------- Hour 1: Scoping, Execution Contexts & Hoisting --------------------

console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace(); // To see the call stack (works in Node & browsers)
}

outerFunction();

// Scopes
const globalVar = 'I am global';
function anyFunction() {
  console.log('anyFunction reads:', globalVar);
}
anyFunction();

function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(functionVar);
}
myFunction();

if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out';
}
console.log('var leaks out:', notBlockScoped);

// avoid reusing the identifier `outer` — use globalOuter instead
const globalOuter = 'global';
function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log('demoScope:', globalOuter, inner, blockConst, functionVar);
  }
  console.log('demoScope later:', globalOuter, inner, functionVar);
}
demoScope();

// scope chain example
const globalName = 'GlobalName';
function a() {
  const name = 'FunctionName';
  function b() {
    console.log('scope chain b():', name);
  }
  b();
}
a();

// Hoisting & TDZ
console.log('var before decl:', varX); // undefined
var varX = 1;
let letX = 2;
const constX = 3;
console.log(varX, letX, constX);

// Function declaration hoisting
console.log('addDecl before declaration:', addDecl(2, 3)); // works
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;
console.log(addDecl(2, 3), addExpr(2, 3), addArrow(2, 3));

// TDZ safe use
const apiUrl = 'https://example.com';
console.log('apiUrl:', apiUrl);

// Hoisting practice: renamed function to avoid identifier clash
let title = 'Behind the Scenes';
function outerPractice() {
  const label = 'outer';
  function innerPractice() {
    console.log('scope:', label);
  }
  innerPractice();
}
outerPractice();

function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one();

// -------------------- Hour 2: The `this` Keyword & Arrow Functions --------------------

// Basic this rules
const person = {
  name: 'Charles',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};
person.greet(); // Hello, I am Charles

// method borrowing
const person1 = {
  name: 'Albert',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};
const anotherPerson = { name: 'Ethan' };
anotherPerson.greet = person.greet;
anotherPerson.greet(); // Hello, I am Ethan

// detached function (don't call it directly to avoid unbound this runtime error)
const greetFunction = person.greet;
// greetFunction(); // would throw in strict mode if invoked (this === undefined)

// Safe DOM handlers (only if document exists)
if (typeof document !== 'undefined') {
  const button = document.querySelector('button');
  if (button) {
    // prefer binding or arrow wrapper to preserve `this`
    button.addEventListener('click', () => person.greet());
    button.addEventListener('click', person.greet.bind(person));
  }
}

// Arrow vs regular functions
const obj = {
  name: 'Object',
  regularMethod: function () {
    console.log('Regular:', this && this.name);
  },
  // arrow uses lexical `this`; use a safe read to avoid TypeError if `this` is undefined
  arrowMethod: () => {
    console.log('Arrow (lexical this):', this && this.name);
  },
};

obj.regularMethod();
obj.arrowMethod();

// quiz example
const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow (lexical this):', this && this.name);
  },
};
quiz.regularMethod();
quiz.arrowMethod();

// timer examples (old approach + modern)
const timer = {
  name: 'Timer',
  start: function () {
    console.log(`${this.name} starting...`);
    const self = this;
    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },
  startModern: function () {
    console.log(`${this.name} starting modern...`);
    setTimeout(() => {
      console.log(`${this.name} finished modern`);
    }, 1500);
  },
};
timer.start();
timer.startModern();

// user hobbies: keep broken example defined but do NOT call the broken variant directly
const user = {
  name: 'Charles',
  hobbies: ['traveling', 'coding', 'gaming', 'basketball', 'jogging'],

  // BROKEN if invoked as a method: arrow loses `this`
  printHobbiesBad: () => {
    // show a safe message and demonstrate failure in a try/catch
    try {
      // if `this` is undefined this will throw; catch it and report
      this.hobbies.forEach(hobby => {
        console.log(`${this.name} likes ${hobby}`);
      });
    } catch (err) {
      console.log('printHobbiesBad failed as expected:', err.message);
    }
  },

  // correct approach: method that uses arrow inside callback
  printHobbiesGood() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },
};

 // Do NOT call the broken version; call the correct one:
user.printHobbiesGood();

// arguments vs rest
const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },
  arrowFunction: () => {
    console.log('Arrow function called');
  },
  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');

const userCard = {
  name: 'Dexter Antonio',
  setupEvents() {
    console.log('Event setup for:', this.name);
  },
};
userCard.setupEvents();

const calculator = {
  numbers: [1, 2, 3, 4, 5],
  multiplier: 2,
  processNumbers() {
    return this.numbers.map(num => num * this.multiplier);
  },
};
console.log('Processed numbers:', calculator.processNumbers());

const myTimer = {
  name: 'Charles Timer',
  startCountdown() {
    console.log(`${this.name} starting countdown...`);
    setTimeout(() => {
      console.log(`${this.name} countdown finished!`);
    }, 1000);
  },
};
myTimer.startCountdown();

// -------------------- Hour 3: Primitives vs Objects, Copying & Strict Mode --------------------

// primitives
let age = 20;
let oldAge = age;
age = 21;
console.log('age:', age, 'oldAge:', oldAge);

// objects by reference
const me = { name: 'Jordan Poole', age: 30 };
const friend = me;
friend.age = 27;
console.log('me:', me, 'friend:', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}
const originalPerson = { name: 'Devin Booker', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);
console.log('original:', originalPerson, 'updated:', updatedPerson, 'same object?:', originalPerson === updatedPerson);

// shallow copy
const original = { name: 'Stephen Curry', age: 28, hobbies: ['reading', 'coding'] };
const shallowCopy = { ...original };
shallowCopy.name = 'Arlott';
console.log('original name:', original.name, 'copy name:', shallowCopy.name);

// nested mutation shows shallow copy limitation
shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies, 'copy hobbies:', shallowCopy.hobbies);

// deep copy using safeClone
const deepOriginal = {
  name: 'Lapu-Lapu',
  age: 32,
  address: { city: 'Cebu', country: 'Philippines' },
  hobbies: ['forging', 'fishing'],
};
const deepCopy = safeClone(deepOriginal);
deepCopy.address.city = 'Mactan';
deepCopy.hobbies.push('cooking');
console.log('original address:', deepOriginal.address, 'copy address:', deepCopy.address);
console.log('original hobbies:', deepOriginal.hobbies, 'copy hobbies:', deepCopy.hobbies);

// JSON pitfalls vs safeClone
const problemObject = {
  name: 'Test',
  date: new Date(),
  method: function () {
    return 'hello';
  },
  undefinedValue: undefined,
};

const brokenCopy = JSON.parse(JSON.stringify(problemObject));
console.log('Broken copy (JSON):', brokenCopy);

const workingCopy = safeClone(problemObject);
console.log('Working copy (safeClone):', workingCopy);

// userManager demonstrating deep-copy on add, safe getUsers and immutable getter
const userManager = {
  users: [],
  addUser: function (userData) {
    const deepCopy = safeClone(userData);
    this.users.push(deepCopy);
  },
  getUsers: function () {
    // returns direct internal array (intentional demonstration)
    return this.users;
  },
  getUsersImmutable: function () {
    return this.users.map(user => safeClone(user));
  },
};

const originalUser1 = { name: 'Mr. Crabs', preferences: { theme: 'dark' } };
userManager.addUser(originalUser1);
originalUser1.name = 'Modified';
console.log('Original changed (external):', originalUser1);
console.log('Stored user (internal):', userManager.getUsers()[0]);

// getUsers returns internal array reference — mutating arr will affect internal state
const arr = userManager.getUsers();
arr.push({ name: 'Plankton' });
console.log('Internal users length after arr.push:', userManager.users.length);

// immutable getter returns clones
const safeList = userManager.getUsersImmutable();
safeList[0].name = 'ChangedAgain';
console.log('Stored user after immutable-get (should be unaffected):', userManager.getUsers()[0]);

// Strict mode examples
function demonstrateThis() {
  console.log('this in strict mode (should be undefined):', this);
}
demonstrateThis();

const readOnlyObj = Object.freeze({ name: 'Frozen' });
try {
  readOnlyObj.name = 'Changed';
  console.log('Mutation succeeded (unexpected)');
} catch (error) {
  console.log('Strict mode caught error (expected):', error.message);
}

// another user manager with chaining and safe clone
const userManager1 = {
  users: [],
  addUser: function (userData) {
    const userCopy = safeClone(userData);
    this.users.push(userCopy);
    return this;
  },
  getUsers: function () {
    return [...this.users]; // shallow copy of the users array
  },
};

const originalUser2 = { name: 'Cici', preferences: { theme: 'dark' } };
userManager1.addUser(originalUser2);
originalUser2.name = 'Modified';
console.log('Original changed (external):', originalUser2);
console.log('Stored user (userManager1):', userManager1.getUsers()[0]);

console.log('=== SCRIPT END ===');
