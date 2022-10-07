// setTimeout(function() { // 1
//   console.log('!');     // 5
// }, 3000);

// setTimeout(function() { // 2
//   console.log('World'); // 4
// }, 1000);

// console.log('Hello');   // 3

// // Be sure you run this code from a file!

// setTimeout(function() { // 1
//   console.log('!');     // 6
// }, 0);

// setTimeout(function() { // 2
//   console.log('World'); // 7
// }, 0);

// console.log('Hello');   // 3
// console.log('Hello');   // 4
// console.log('Hello');   // 5

// function delayLog() {
//   let delay = 1000;
//   for (let count = 1; count <= 10; count++) { 
//     setTimeout(() => console.log(count), (count * delay));
//   }
// /* if count is defined with var (function scope), 
// output will be 11 each time since count's final number 
// will be resolved before the first second ends. */
// };

// delayLog();

// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);

// setTimeout(function() {     // 1
//   setTimeout(function() {   // 6
//     console.log(`q()`);                    // 12
//   }, 15);

//   console.log(`d()`);                      // 7

//   setTimeout(function() {   // 8
//     console.log(`n()`);                    // 10
//   }, 5);

//   console.log(`z()`);                      // 9
// }, 10);

// setTimeout(function() {     // 2
//   console.log(`s()`);                      // 11
// }, 20);

// setTimeout(function() {     // 3
//   console.log(`f()`);                      // 5
// });

// console.log(`g()`);                        // 4

// // g(), f(), d(), z(), n(), s(), q()

// function afterNSeconds(callback, seconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < (seconds * 1000));

//   callback();
// };


// afterNSeconds(() => console.log('Hello'), 5);

// function afterNSeconds(callback, seconds) {
//   setTimeout(callback, seconds * 1000);
// }

// function startCounting() {
//   let count = 0;
//   let counterId = setInterval(function() {
//     count += 1;
//     console.log(count);
//   }, 1000);

//   return counterId;
// }

// function stopCounting(counterId) {
//   clearInterval(counterId);
// }

// let counterId = startCounting();

// setTimeout(stopCounting, 10000, counterId);