/*
2/4 Accessing and Modifying Object Properties

Explanation: You can access and modify the properties of an object using dot notation or bracket notation.

- Dot Notation
- Bracket Notation:
*/

// Dot Notation
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(person.firstName);
console.log(person.age);
console.log(person.lastName);

// Bracket Notation
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(person["lastName"]);
person["age"] = 30;
console.log(person["age"]);

