// Object
const User = {
  name: "notHitesh",
  email: "mail@a.com",
  isActive: true,
};

// Function to create objects with type safety - does not return anything
// Calling function with email parameter gives a type error because that parameter is not predefined
function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "joe", email: "h@h.com", isPaid: false });

// Example of weirdness:
// TypeScript doesn't catch the type discrepancy when the object is being passed as a reference
function createUser2({ name: string, isPaid: boolean }) {}

let newUser = { name: "joe", email: "h@h.com", isPaid: false };

createUser2(newUser);

// Function that promises to return an object with specific types
function createCourse(): { name: string; price: number } {
  return { name: "react", price: 100 };
}

// Type alias - like an object template
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// Type can be used as a parameter to pass the entire object to the function
function createUser3(user: User) {}

// Function has to be called with matching parameters from the specified type otherwise, type error
createUser3({ name: "", email: "", isActive: false });

export {};

// readonly before a parameter prevents it from being changed
// ? before the colon makes a parameter optional
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: true;
  cardDetails?: number;
};

// error thrown, cannot assign id because it is readonly
let readUser: User = {
  _id: "1234",
  name: "h",
  email: "a@b.com",
  isActive: false,
};

// use & to mix and match types!
type cardNumber = {
  cardNum: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
