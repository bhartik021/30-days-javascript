/*
4/4 The `this` Keyword

Explanation: The `this` keyword refers to the object it belongs to. It has different values depending on where it is used:

- In a method, `this` refers to the owner object.
- Alone, `this` refers to the global object.
- In a function, `this` refers to the global object.
- In an event, `this` refers to the element that received the event.
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