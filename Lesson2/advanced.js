"use strict"; // Needs to be run at top of program

// function foo() {
//   if (true) {
//     var a = 1;
//     let b = 2;
//   }

//   console.log(a); // 1
//   console.log(b); // ReferenceError: b is not defined
// }

// foo();

// function foo() {
//   if (false) {
//     var a = 1;
//     let b = 2;
//   }
//   console.log(a); // undefined
//   console.log(b); // ReferenceError: b is not defined
// }
// foo();

// function bar() {
//   console.log(foo);
// }

// var foo;

// bar();          // logs undefined
// foo = 'hello';

// function bar() {
//   console.log(foo);
// }

// var foo;

// bar();          // logs undefined
// foo = 'hello';

// boo();

// function boo() {
//   console.log("Boo!");
// }

// let foo = "hello";

// function foo() { // SyntaxError: Identifier 'foo' has already been declared
//   console.log("hello");
// }

// function foo() {
//   console.log("hello");
// }

// let foo = "hello"; // SyntaxError: Identifier 'foo' has already been declared

// var foo = function() {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo();

// function foo() {
//   console.log("Hello");
// }

// foo = function() {
//   console.log("Bye");
// }

// foo();

// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo); // "Bye"
// console.log(index); // 2

// Equivalent to:

// var index;
// var foo;

// for (index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);

// bar();

// function bar() {
//   console.log("foo!");
// };

// var bar = 82;
// function foo() {
//   var bar = bar - 42;
//   console.log(bar);
// }

// foo(); // NaN

// function foo() {
//   var bar; // undefined
//   bar = bar - 42; // NaN
//   console.log(bar);
// }

// var bar;

// bar = 82;

// foo(); // NaN

// function foo(condition) {
//   let bar;

//   console.log(bar);

//   let qux = 0.5772;

//   if (condition) {
//     qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;

//     let xyzzy = function() {
//       let qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);

// function Pet(name, image) {
//   this.name = name;
//   this.image = image;
// }

// let Image;
// var catImage;
// var pudding;

// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// Image = class {
//   constructor(file) {
//     this.file = file;
//   }
// }

// catImage = new Image("cat.png");
// pudding = new Pet("Pudding", catImage);

// console.log(catImage);
// console.log(pudding);

// let obj = {
//   a: 5,
//   go() {
//     this.a = 42; // TypeError: Cannot set property 'a' of undefined (under strict mode)
//   },
// };

// let doIt = obj.go;
// doIt();
// console.log(obj.a); // 5

// const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
// const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
//          "10", "Jack", "Queen", "King", "Ace"];

// function createDeck() {
//   let allCards = () => {
//     return SUITS.reduce((deck, suit) => {
//       RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
//       return deck;
//     }, []);
//   };

//   let deck = allCards();
//   shuffle(deck);

//   return deck;
// }

// function shuffle(deck) {
//   for (let counter = 0; counter < 400; counter += 1) {
//     let randomIndex1 = randomCardIndex();
//     let randomIndex2 = randomCardIndex();
//     let tempCard = deck[randomIndex1];
//     deck[randomIndex1] = deck[randomIndex2];
//     deck[randomIndex2] = tempCard;
//   }

//   function randomCardIndex() {
//     return Math.floor(Math.random() * deck.length);
//   }
// }

// console.log(createDeck());

// let counter = 0;

// function makeCounter() {
//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// function makeCounter() {
//   return function() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter1 = makeCounter();
// let incrementCounter2 = makeCounter();

// console.log(incrementCounter1());
// console.log(incrementCounter1());

// console.log(incrementCounter2());
// console.log(incrementCounter2());

// function makeMultipleLister(integer) {
//   return () => {
//     // let multiple = integer;

//     // while (multiple < 100) {
//     //   console.log(multiple);
//     //   multiple += integer;
//     // }

//     for (let multiple = integer; multiple < 100; multiple += integer) {
//       console.log(multiple);
//     }
//   }
// }
// let lister = makeMultipleLister(19);
// lister();

// function runningTotal() {
//   let runningTotal = 0;

//   function add(integer) {
//     runningTotal += integer;
//     console.log(runningTotal);
//   };

//   function subtract(integer) {
//     runningTotal -= integer;
//     console.log(runningTotal);
//   }

//   return [add, subtract];
// }

// let operations = runningTotal();

// let add = operations[0];
// let subtract = operations[1];

// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10

// // Could have been coded as:

// let total = 0;

// function add(number) {
//   total += number;
//   console.log(total);
// }

// function subtract(number) {
//   total -= number;
//   console.log(total);
// }

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// function later(func, argument) {
//   return () => func(argument);
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// function later2(func, argument) {
//   return minutes => func(argument, minutes);
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!

// let bind = (context, func) => {
//   return () => func.call(context);
// }

// let obj = {};
// let boundFunc = bind(obj, function() {
//   this.foo = "bar";
// });

// boundFunc();
// console.log(obj); // { foo: 'bar' }

// function makeCounterLogger(startNum) {
//   let count = startNum;

//   return (endNum) => {
//     if (endNum > startNum) {
//       while (count <= endNum) {
//         console.log(count);
//         count++;
//       }
//       count = startNum;
//     } else if (endNum < startNum) {
//       while (count >= endNum) {
//         console.log(count);
//         count--;
//       }
//       count = startNum;
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);

// let makeList = () => {
//   let list = [];

//   return item => {
//     if (!item) {
//       if (list.length === 0) {
//         console.log(`The list is empty.`);
//       }
//       list.forEach(todo => {
//         console.log(todo);
//       });
//     } else if (list.includes(item)) {
//       let index = list.indexOf(item);
//       list.splice(index, 1);
//       console.log(`${item} removed!`);
//     } else {
//       list.push(item);
//       console.log(`${item} added!`);
//     }
//   }
// }

// let list = makeList();
// list();
// // The list is empty.

// list("make breakfast");
// // make breakfast added!

// list("read book");
// // read book added!

// list();
// // make breakfast
// // read book

// list("make breakfast");
// // make breakfast removed!

// list();
// // read book

// let makeList = () => {
//   let items = [];
//   return {
//     add: function(item) {
//       items.push(item);
//       console.log(`${item} added!`)
//     },

//     remove: function(item) {
//       let index = items.indexOf(item);
//       items.splice(index, 1);
//       console.log(`${item} removed!`);
//     },

//     list: function() {
//       if (items.length === 0) {
//         console.log(`The list is empty.`);
//       } else {
//         items.forEach(item => console.log(item));
//       }
//     }
//   }
// }

// let list = makeList();

// list.list();

// list.add("peas");
// // peas added!

// list.list();
// // peas

// list.add("corn");
// // corn added!

// list.list();
// // peas
// // corn

// list.remove("peas");
// // peas removed!

// list.list();
// // corn

// // thousands of lines of messy JavaScript code!

// let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
// let largest = -Infinity;
// for (let index = 0; index < array.length; index += 1) {
//   if ((array[index] % 2) === 0 && (array[index] > largest)) {
//     largest = array[index];
//   }
// }
// console.log(largest); // 24

// // more messy JavaScript code

// // thousands of lines of messy JavaScript code!

// function findLargest() {
//   let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if ((array[index] % 2) === 0 && (array[index] > largest)) {
//       largest = array[index];
//     }
//   }

//   return largest;
// }

// console.log(findLargest()); // 24

// // more messy JavaScript code

// // thousands of lines of messy JavaScript code!

// console.log((function() {
//   let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if ((array[index] % 2) === 0 && (array[index] > largest)) {
//       largest = array[index];
//     }
//   }

//   return largest;
// })()); // 24

// // more messy JavaScript code

// // thousands of lines of messy JavaScript code!

// console.log((function(array) {
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if ((array[index] % 2) === 0 && (array[index] > largest)) {
//       largest = array[index];
//     }
//   }

//   return largest;
// })([5, 10, 12, 7, 9, 6, 24, -10, -200, 37])); // 24

// // more messy JavaScript code

// // thousands of lines of messy JavaScript code!

// {
//   let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if ((array[index] % 2) === 0 && (array[index] > largest)) {
//       largest = array[index];
//     }
//   }
//   console.log(largest); // 24
// }

// // more messy JavaScript code

// const makeUniqueId = (function() {
//   let count = 0;
//   return function() {
//     ++count;
//     return count;
//   };
// })();

// console.log(makeUniqueId()); // => 1
// console.log(makeUniqueId()); // => 2
// console.log(makeUniqueId()); // => 3

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += (function(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);
// console.log(sum);

// (function(integer) {
//   // while (integer >= 0) {
//   //   console.log(integer);
//   //   integer--;
//   // }

//   for (let count = integer; count >= 0; count--) {
//     console.log(count);
//   }
// })(7);

// (function foo() {
//   console.log('Bar');
// })();

// foo() // ReferenceError: foo is not defined

// let bar = (function(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// (function countdown(integer) {
//   console.log(integer);

//   if (integer !== 0) {
//     integer--;
//     countdown(integer);
//   }
// })(7);

// function foo(array) {
//   return [
//     array[2],
//     5,
//     array[0],
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// // let [ bar, qux, baz ] = result;
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// // const { first, second, ...rest } = obj;
// const first = obj.first;
// const second = obj.second;
// const rest = {};
// rest.third = obj.third;
// rest.rest = obj.rest;
// console.log(rest);

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   return {
//     type: animalType,
//     age,
//     colors,
//   }
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

// function objectFactory(first, two, three, four, last) {
//   return {
//     first,
//     last,
//     middle: [two, three, four].sort(),
//   }
// }

// let array = [1, 2, 4, 3, 5];

// let object = objectFactory(...array);
// let {first, last, middle} = objectFactory(...array);
// console.log(object);
// console.log(first);
// console.log(last);
// console.log(middle);

// console.log(module);

// Object.noun(); // Code must be in a try block in order to catch error

// try {
//   Object.noun();
// } catch(error) {

//   if (error instanceof TypeError) { // conditional statement for Error type within catch block
//     console.log(error);
//   } else {
//     throw error; // re-throw if the 'if' conditional is false
//   }  

//   // throw new Error(`Hello`); // throwing a new Error starts the process over again of looking for a relevant try/catch statement

// } 

// console.log([].length);

// function myBind(func, context, ...args) {
//   return function() {
//     args.push(...arguments);
//     return func.apply(context, args);
//   }
// }

// function last(lastName, middleName, salutation) {
//   console.log(`Hello, my name is ${salutation} ${this.first} ${middleName} ${lastName}`);
// }

// let me = {
//   first: 'Joshua',
// }

// me.greet = myBind(last, me, 'Lindsay', 'William');

// me.greet('Mr.');

// function addNumbers(a, b) {
//   return a + b;
// }

// let addFive = myBind(addNumbers, null, 5);

// console.log(addFive(10)); // 15

// function newStack() {
//   let stack = [];

//   return {
//     push(element) {
//       stack.push(element);
//     },

//     pop() {
//       return stack.pop();
//     },

//     printStack() {
//       stack.forEach(element => console.log(element));
//     },
//   }
// }

// let advancedStack = newStack();

// advancedStack.push('one');
// advancedStack.push('two');
// advancedStack.push('three');
// advancedStack.pop();
// advancedStack.printStack();

// function delegate(object, methodName, ...args) {
//   return () => {
//     object[methodName](...args);
//   }
// }

// let foo = {
//   name: 'test',
//   bar: function(greeting1, greeting2) {
//     console.log(greeting1 + ' ' + greeting2 + ' ' + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, 'bar', 'hello', 'again'),
// };

// baz.qux();   // logs 'hello test';

// foo.bar = function() { console.log('changed'); };

// baz.qux();          // logs 'changed'

// let Account = {
//   init(userEmail, password, first, last) {
//     this.email = function email(checkPass) {
//       if (checkPass === password) {
//         console.log(userEmail);
//         return userEmail;
//       } else {
//         console.log(`Invalid Password`)
//       }
//     };
    
//     this.firstName = function firstName(checkPass) {
//       if (checkPass === password) {
//         console.log(first);
//       } else {
//         console.log(`Invalid Password`)
//       }
//     };

//     this.lastName = function lastName(checkPass) {
//       if (checkPass === password) {
//         console.log(last);
//       } else {
//         console.log(`Invalid Password`)
//       }
//     };

//     function anonymizer() {
//       const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//       let sequence = '';

//       for (let char = 1; char <= 16; char++) {
//         sequence += characters.charAt(Math.floor(Math.random() * characters.length));
//       }

//       return sequence;
//     };
    
//     this.displayName = anonymizer();

//     return this;
//   },

//   reanonymize() {

//   },

//   resetPassword(oldPass, newPass) {
//     if (oldPass === this.) {
//       password = newPass;
//     } else {
//       console.log(`Invalid Password`);
//     }

//   },

//   firstName() {

//   },

//   lastName() {

//   },

//   email() {

//   },
// }

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.email('123456'));               // logs 'foo@bar.com'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// var foo = 10;

// function bar() {
//   if (foo > 20) {
//     var foo = 50;
//   }

//   console.log(foo);
//   foo += 10;
// }

// bar();
// bar();
// bar();

// console.log(foo());

// function foo() {
//   console.log('Waiting for bar!');
// }

// function foo() {
//   console.log(foo);
//   function bar() {
//     console.log('bar again');
//   }

//   bar();

//   function bar() {
//     console.log('bar again and again');
//   }
// }

// function foo(initialValue) {
//   let total = initialValue;
//   return function (adjustmentValue) {
//     total += adjustmentValue;
//     return total;
//   };
// }

// let bar = foo(10);
// let result = bar(-2); // total = 8; 8
// result += bar(5); // total = 13; 8 + 13 = 21
// result += bar(3); // total = 16; 21 + 16 = 37
// result += bar(-4); // total = 12; 37 + 12 = 49
// console.log(result);

// function createBankAccount() {
//   let transactions = [];

//   return {
//     balance: 0,

//     deposit(amount) {
//       this.balance += amount;
//       transactions.push({ deposit: amount });
//     },

//     withdraw(amount) {
//       if (this.balance >= amount) {
//         this.balance -= amount;
//         transactions.push({ withdrawal: amount });
//       } else {
//         console.log("overdrawn!");
//       }
//     },

//     getMostRecentTransaction() {
//       return Object.assign({}, transactions[transactions.length - 1]);
//     }
//   };
// }

// let myAccount = createBankAccount();

// myAccount.deposit(500);
// console.log(myAccount.getMostRecentTransaction());

// console.log(myAccount.getMostRecentTransaction());
// console.log(myAccount.balance);
// myAccount.balance = 1000;
// console.log(myAccount.balance);

// let left = 4;
// let right = 5;

// console.log((function() {
//   return left + right;
// }()));

// function xyzzy({ msg, foo, bar, qux }) {
//   return {
//     foo: foo,
//     bar: bar,
//     qux: qux,
//     log: function() {
//       console.log(msg);
//     },
//   };
// }

// let object = xyzzy('hello', 'yellow', 'blue', 'red');
// console.log(object);

// let array = [1, 2, 3];
// let [ ...newArray ] = array;
// console.log(newArray);
// console.log(newArray === array);

// const { push, pop, arr } = require("./foo");

// push(3);
// push(2);
// arr[2] = 5;
// console.log(pop());

let foo = ["bar", "qux"];

function getFoo() {
  return foo;
}

let newFoo = getFoo();
console.log(newFoo);
console.log(newFoo === foo);

