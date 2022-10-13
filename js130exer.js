// // Our very own bind() & myBind() Improved

// function myBind(func, context, ...args) {
//   return (...argsRest) => {
//     func.call(context, args, argsRest);
//   };
// }

// let me = {
//   firstName: 'Joshua',

//   greet(middle, last) {
//     console.log(`Hello! My name is ${this.firstName} ${middle} ${last}.`);
//   }
// }

// let meGreet = myBind(me.greet, me, 'William');

// meGreet('Lindsay');

// // Make a Stack

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
//     }
//   }
// }

// let myStack = newStack();

// myStack.printStack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.printStack();
// myStack.pop();
// myStack.printStack();

// let anotherStack = newStack();

// anotherStack.printStack(); // references new stack array

// // Delegate

// function delegate(obj, method, ...args) {
//   return function() {
//     obj[method].apply(obj, args); // or...
//     // obj[method](...args);
//   }
// }

// let foo = {
//   name: 'test',
//   bar: function(greeting, greeting2) {
//     console.log(greeting + ' ' + greeting2 + ' ' + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, 'bar', 'hello', 'there'),
// };

// baz.qux();   // logs 'hello test';

// let func = baz.qux;

// func();

// foo.bar = function() { console.log('changed'); };

// baz.qux();          // logs 'changed'

// // Anonymizer

// const Account = (function() {
//   const accounts = new WeakMap();

//   function anonymize() {
//     let display = '';
//     const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     for (let index = 0; index < 16; index++) {
//       display += CHARS.charAt(Math.floor(Math.random() * 62));
//     }

//     return display;
//   };

//   return {
//     firstName: function(password) {
//       if (password === accounts.get(this).pass) {
//         return accounts.get(this).first;
//       } else {
//         return `Invalid password`;
//       }
//     },
  
//     lastName: function(password) {
//       if (password === accounts.get(this).pass) {
//         return accounts.get(this).last;
//       } else {
//         return `Invalid password`;
//       }
//     },
  
//     email: function(password) {
//       if (password === accounts.get(this).pass) {
//         return accounts.get(this).email;
//       } else {
//         return `Invalid password`;
//       }
//     },
  
//     reanonymize(password) {
//       if (password === accounts.get(this).pass) {
//         this.displayName = anonymize();
//         return true;
//       } else {
//         return `Invalid password`;
//       };
//     },
  
//     resetPassword(password, newPass) {
//       if (password === accounts.get(this).pass) {
//         accounts.get(this).pass = newPass;
//         return true;
//       } else {
//         return `Invalid password`;
//       }
//     },
  
//     init(email, pass, first, last) {
//       accounts.set(this, {
//         email,
//         first,
//         last,
//         pass
//       });

//       this.displayName = anonymize();
  
//       return this;
//     }  
//   }
// })();

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar);
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true
// console.log(fooBar.firstName('abc'));              // logs 'foo'
// let displayName = fooBar.displayName;
// console.log(fooBar.reanonymize('abc'));            // logs true
// console.log(displayName === fooBar.displayName);   // logs false
// let quxBar = Object.create(Account).init('qux@bar.com', '123456', 'qux', 'bar');
// console.log(quxBar);
// console.log(quxBar.firstName);                     // returns the firstName function
// console.log(quxBar.email);                         // returns the email function
// console.log(quxBar.firstName('123456'));           // logs 'qux'

// // Mini Inventory Management System

// const itemCreator = (itemName, category, quantity) => {
//   let notValid = {
//     notValid: true,
//   };
  
//   if (itemName.split(' ').join('').length < 5) return notValid;
//   if (category.includes(' ') || category.length < 5) return notValid;
//   if (quantity === undefined) return notValid;

//   const skuGenerator = () => {
//     let skuCode = '';
//     let firstWord = itemName.split(' ')[0];
//     let secondWord = itemName.split(' ')[1];
//     if (firstWord.length >= 3) {
//       skuCode += firstWord.slice(0, 3) + category.slice(0, 2);
//     } else if (firstWord.length === 2) {
//       skuCode += firstWord + secondWord.slice(0, 1) + category.slice(0, 2);
//     } else if (firstWord.length === 1) {
//       skuCode += firstWord + secondWord.slice(0, 2) + category.slice(0, 2);
//     }

//     return skuCode.toUpperCase();
//   };

//   return {
//     skuCode: skuGenerator(),
//     itemName,
//     category,
//     quantity
//   };
// };

// const ItemManager = {
//   items: [],

//   create(itemName, category, quantity) {
//     let newItem = itemCreator(itemName, category, quantity);

//     if (newItem.notValid) {
//       return false;
//     } else {
//       this.items.push(newItem);
//     };
//   },

//   update(sku, obj) {
//     let skuIndex;

//     this.items.forEach((item, index) => {
//       if (item.skuCode === sku) {
//         skuIndex = index;
//       }
//     });

//     Object.assign(this.items[skuIndex], obj);
//   },

//   delete(sku) {
//     let skuIndex;

//     this.items.forEach((item, index) => {
//       if (item.skuCode === sku) {
//         skuIndex = index;
//       }
//     });

//     this.items.splice(skuIndex, 1);
//   },

//   inStock() {
//     let inStock = this.items.filter(item => item.quantity);
//     inStock.forEach(item => console.log(item.itemName));
//   },

//   itemsInCategory(cat) {
//     let filteredCat = this.items.filter(item => item.category === cat);
//     filteredCat.forEach(item => console.log(item.itemName));
//   }
// };

// const ReportManager = {
//   init(itemMgr) {
//     this.items = itemMgr.items;
//   },

//   createReporter(sku) {
//     let skuIndex;

//     this.items.forEach((item, index) => {
//       if (item.skuCode === sku) {
//         skuIndex = index;
//       }
//     });

//     let skuObj = this.items[skuIndex];

//     return {
//       itemInfo() {
//         for (let prop in skuObj) {
//           console.log(`${prop}: ${skuObj[prop]}`);
//         }
//       }
//     }
//   },

//   reportInStock() {
//     let inStock = this.items.filter(item => item.quantity);
//     return inStock.map(item => item.itemName).join(', ');
//   }
// };

// ItemManager.create('basket ball', 'sports', 0);           // valid item
// ItemManager.create('asd', 'sports', 0);
// ItemManager.create('soccer ball', 'sports', 5);           // valid item
// ItemManager.create('football', 'sports');
// ItemManager.create('football', 'sports', 3);              // valid item
// ItemManager.create('kitchen pot', 'cooking items', 0);
// ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// // returns list with the 4 valid items
// console.log(ItemManager.items);

// ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
// console.log(ReportManager.reportInStock());

// ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
// ItemManager.inStock();
// // football,kitchen pot
// console.log(ReportManager.reportInStock());

// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.itemsInCategory('sports');

// ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
// console.log(ItemManager.items);

// let kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10

// // Rest Parameters

// function sum(...values) {
//   return values.reduce(function(a, b) {
//     return a + b;
//   });
// }

// console.log(sum(1, 4, 5, 6)); // 16

// // Spread Syntax

// function formatName(firstName, middleName, lastName) {
//   return `${lastName}, ${firstName} ${middleName[0]}.`;
// }

// fullName = ['James', 'Tiberius', 'Kirk'];

// console.log(formatName(...fullName));
// // logs: Kirk, James T.