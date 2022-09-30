// let pets = ['dog', 'cat', 'fish'];

// pets.forEach(pet => console.log(pet));

// console.log(pets.filter((pet, index) => index < 2));

// console.log(pets.map(pet => `my ${pet}`));

// console.log(pets.reduce(((previousValue, currentValue) => previousValue + ', ' + currentValue), 'pets'));
// console.log(pets.reduce(function(acc, pet, index) {
//   if (index < 2) {
//     acc.push(pet);
//   }
//   return acc;
// }, []));

// function forEach(array, callback, thisArg) {
//   for (let index = 0; index < array.length; index++) {
//     callback.call(thisArg, array[index], index, array);
//   }
// }

// function filter(array, callback, thisArg) {
//   let filteredArray = [];
//   for (let index = 0; index < array.length; index++) {
//     if (callback.call(thisArg, array[index], index, array)) {
//       filteredArray.push(array[index]);
//     };
//   }
//   return filteredArray;
// }

// function filter(array, callback, thisArg) {
//   return array.reduce(function(filteredItems, element, index, array) {
//     if (callback.call(thisArg, array[index], index, array)) {
//       filteredItems.push(element);
//     }
//     return filteredItems;
//   }, []);
// }

// function map(array, callback, thisArg) {
//   let transformedArray = [];
//   for (let index = 0; index < array.length; index++) {
//     transformedArray.push(callback.call(thisArg, array[index], index, array));
//   }
//   return transformedArray;
// }

// function map(array, callback, thisArg) {
//   return array.reduce(function(transformedArray, element, index, array) {
//     transformedArray.push(callback.call(thisArg, element, index, array));
//     return transformedArray;
//   }, []);
// }

// function reduce(array, callback, initialValue) {
//   let accumulator = initialValue || array[0];
//   let currentValue;
//   if (initialValue) {
//     for (let index = 0; index < array.length; index++) {
//       currentValue = array[index];
//       accumulator = callback.call(array, accumulator, currentValue, index, array);
//     }
//   } else {
//     for (let index = 1; index < array.length; index++) {
//       currentValue = array[index];
//       accumulator = callback.call(array, accumulator, currentValue, index, array);
//     }
//   }
//   return accumulator;
// }

// forEach(pets, pet => console.log(pet));

// console.log(filter(pets, (pet, index) => index < 2));

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

// console.log(map(pets, pet => `my ${pet}`));

// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// console.log(reduce(pets, ((previousValue, currentValue) => previousValue + ', ' + currentValue), 'pets'));

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]

// class Foo {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   showItem(item) {
//     console.log(this.prefix, item);
//   }
// }

// let foo = new Foo("Item: ");
// [1, 2, 3].forEach(foo.showItem, foo);
// // [4, 5, 6].forEach(foo.showItem);

// ["a", "b", "c"].forEach(function(value, index, arr) {
//   console.log(`After ${value} comes ${arr[index + 1]}`);
// });

// function objForEach(object, callback) {
//   for (let property in object) {
//     if (object.hasOwnProperty(property)) {
//       callback(property, object[property]);
//     }
//   }
// }

// let obj = { foo: 1, bar: 2, qux: 3 };
// objForEach(obj, (property, value) => {
//   console.log(`the value of ${property} is ${value}`);
// });

// // the value of foo is 1
// // the value of bar is 2
// // the value of qux is 3
