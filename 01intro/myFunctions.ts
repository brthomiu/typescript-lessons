function addTwo(num: number): number {
  return num + 2;
  // return "hello" - causes a type error because function is supposed to return a number
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

// arrow function with typed parameters, isPaid defaults to false
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// without the type declarations in the parameters the types would be inferred as any which is not ideal
let myValue = addTwo(5);
getUpper("lumps");

signUpUser("darbie", "darbie@bungle.com", true);
loginUser("a", "b");

// This function can return either a boolean or a string
function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

// If a string is typed to return something it has to actually have a return statement
const getHello = (s: string): string => {
  return "";
};

// TypeScript has smart context switching - look at the types of the mapped array that are inferred
//const heros = ["ham", "swiss", "cat"];
const heros = [1, "yart", 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});


// Return void to indicate that a function will never have a return IE a console message
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// Return never for error messages - this is better than void for errors because it forces an exception
function handleError(errmsg: string): never {
    throw new Error(errmsg);
  }
  

export {};
