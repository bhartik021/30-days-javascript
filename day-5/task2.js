/*
2/2 Array Methods

- push: The push method adds one or more elements to the end of an array and returns the new length of the array.

Syntax:
arrayName.push(element1, ..., elementN);

----------------------------

- pop: The pop method removes the last element from an array and returns that element.

Syntax:
arrayName.pop();

----------------------------

- shift: The shift method removes the first element from an array and returns that element.

Syntax:
arrayName.shift();

----------------------------

- unshift: The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.

Syntax:
arrayName.unshift(element1, ..., elementN);

----------------------------

- map: The map method creates a new array with the results of calling a provided function on every element in the calling array.

Syntax:
http://arrayName.map(function(currentValue, index, arr), thisValue);

----------------------------

- filter: The filter method creates a new array with all elements that pass the test implemented by the provided function.

Syntax:
arrayName.filter(function(currentValue, index, arr), thisValue);

----------------------------

reduce: The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

Syntax:
arrayName.reduce(function(accumulator, currentValue, index, arr), initialValue);
*/

// push method
var fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits);

// pop method
var fruits = ["Apple", "Banana", "Cherry"];
var lastfruit = fruits.pop();
console.log(fruits);
console.log(lastfruit);

// shift method
var fruits = ["Apple", "Banana", "Cherry"];
var firstfruit = fruits.shift();
console.log(fruits);
console.log(firstfruit);

// unshift method
var fruits = ["Banana", "Cherry"];
fruits.unshift("Apple");
console.log(fruits);

// map method
var numbers = [1, 2, 3];
var doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter method
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers);

// reduce method
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
