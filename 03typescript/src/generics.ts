const score: Array<number> = [];

const names: Array<string> = [];

// This can only take a number or a boolean and return a number or a boolean
function identityOne(val: boolean | number): boolean | number {
  return val;
}

// This can take or return anything with no restrictions
function identityTwo(val: any): any {
  return val;
}

// This will accept any type, but it will check to make sure it returns the same type it accepts (type can be anything, doesn't have to be "Type")
function identityThree<Type>(val: Type): Type {
  return val;
}

// When the method is invoked it returns the same type that is passed!
identityThree(1);
identityThree("one");

interface Bottle {
  brand: string;
  size: number;
}

// This is the syntax for passing an interface as a type to a generic
identityThree<Bottle>({ brand: "good", size: 1 });

// Generic method - takes an array and returns a value from the array

function getSearchProducts<T>(products: T[]): T {
  //Database Operations Here
  const myIndex = 3;
  return products[myIndex];
}

// Same thing with arrow function syntax
const getMoreSearchProducts = <T>(products: T[]): T => {
  //Database Operations Here
  const myIndex = 4;
  return products[myIndex];
};

// NOTE - A common convention people use for generics is to add a comma to the declaration IE: <T,>
// This just makes it easy to tell that it is a generic type declaration versus something like JSX

interface DataBase {
  connection: string;
  userName: string;
  password: string;
}

// extends will lock a property in a generic to a specific type or interface
function anotherFunction<T, U extends DataBase>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, { connection: "one", userName: "two", password: "three" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

// Generic class that can handle different types
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T){
    this.cart.push(product)
  }
}
