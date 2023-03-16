"use strict";
const score = [];
const names = [];
// This can only take a number or a boolean and return a number or a boolean
function identityOne(val) {
    return val;
}
// This can take or return anything with no restrictions
function identityTwo(val) {
    return val;
}
// This will accept any type, but it will check to make sure it returns the same type it accepts (type can be anything, doesn't have to be "Type")
function identityThree(val) {
    return val;
}
// When the method is invoked it returns the same type that is passed!
identityThree(1);
identityThree("one");
// This is the syntax for passing an interface as a type to a generic
identityThree({ brand: "good", size: 1 });
// Generic method - takes an array and returns a value from the array
function getSearchProducts(products) {
    //Database Operations Here
    const myIndex = 3;
    return products[myIndex];
}
// Same thing with arrow function syntax
const getMoreSearchProducts = (products) => {
    //Database Operations Here
    const myIndex = 4;
    return products[myIndex];
};
// extends will lock a property in a generic to a specific type or interface
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, { connection: "one", userName: "two", password: "three" });
// Generic class that can handle different types
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
