"use strict";
exports.__esModule = true;
// Object
var User = {
  name: "notHitesh",
  email: "mail@a.com",
  isActive: true,
};
// Function to create objects with type safety - does not return anything
// Calling function with email parameter gives a type error because that parameter is not predefined
function createUser(_a) {
  var string = _a.name,
    boolean = _a.isPaid;
}
createUser({ name: "joe", email: "h@h.com", isPaid: false });
// Example of weirdness:
// TypeScript doesn't catch the type discrepancy when the object is being passed as a reference
function createUser2(_a) {
  var string = _a.name,
    boolean = _a.isPaid;
}
var newUser = { name: "joe", email: "h@h.com", isPaid: false };
createUser(newUser);
// Function that promises to return an object with specific types
function createCourse() {
  return { name: "react", price: 100 };
}
