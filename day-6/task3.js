/*
3/4 Methods in Objects

Explanation: Methods are functions that are stored as object properties. They allow objects to have behavior.

Syntax:
let objectName = {
  methodName: function() {
    // code to be executed
  }
};
*/

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());