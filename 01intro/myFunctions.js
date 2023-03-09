"use strict";
exports.__esModule = true;
function addTwo(num) {
  return num + 2;
}
function getUpper(val) {
  return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {}
// arrow function with typed parameters, isPaid defaults to false
var loginUser = function (name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
};
// without the type declarations in the parameters the types would be inferred as any which is not ideal
addTwo(5);
getUpper("lumps");
signUpUser("darbie", "darbie@bungle.com", true);
loginUser("a", "b");
