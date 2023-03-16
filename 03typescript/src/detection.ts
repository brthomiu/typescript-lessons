// This returns an error because the val could be a number and is incompatible with string methods
// function detectType(val: number | string){
//     return val.toLowerCase
// }

// Conditionals can be used to solve this
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  } else {
    return val + 3;
  }
}

// Don't forget to handle all of your types! Documentation - typeguards

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

// Dangerous example from documentation
// This doesn't handle an empty correctly string, since an empty string is a falsy value

function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  username: string;
  email: string;
}

interface Admin {
  username: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  // Cannot just return isAdmin as such because the User interface doesn't have an isAdmin property
  //return account.isAdmin
  // Can use "in" as a conditional check instead:
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//instanceof - used to check if a object is an instance of another class/object, this can be used as a type safety

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// Method to validate type of input value, will return a true/false value
function isFish(pet: Fish | Bird) {
  // "as" is a type assertion, pet will be treated like a fish
  return (pet as Fish).swim !== undefined;
}

// In this case a boolean being returned from the method will not function properly
function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

// Method to validate type of input value, will return the type
function isFish2(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Works properly when the type is returned instead of a boolean
function getFood2(pet: Fish | Bird) {
  if (isFish2(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

// discriminated unions

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
  // Get autosuggestions for the kind of the shape!
  if (shape.kind === "circle") {
    // Shape is typed as a circle within the conditional
    return Math.PI * shape.radius ** 2
  } //return shape.side * shape.side
}

// Assigning never as a default case is an "exhaustiveness check" for if you are handling all type cases
// As long as all the types are handled, the default code shouldn't run and will not have any errors
// If any cases are not handled the default case will have an error and you know you need to check your types

function getArea(shape: Shape){
  switch(shape.kind){
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.side * shape.side
    case "rectangle":
      return shape.length * shape.width
    default: 
    const _defaultShape: never = shape
    return _defaultShape
  }
}