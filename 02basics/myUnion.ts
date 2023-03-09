// Way to have multiple data types without using "any"

// score can accept number or string
// be as strict as possible with types
let score: number | string = 33;

score = 44;

score = "55";

// Works with custom types as well

type newUser = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let foobie: newUser | Admin = { name: "foobie", id: 123 };

function getDbId(id: number | string) {
  // mAkInG aPi CaLlS
  console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId("3");

// error is thrown for string method because TS knows a number could be passed
// TS expects an object that has all the potential properties of the union, aka Union Narrowing
function getDbId2(id: number | string) {
  id.toLowerCase();
}

// a conditional statement fixes this!
function getDbId3(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// Arrays - funky parentheses syntax

const dataArray: (string | number)[] = [1, "two", 3];

//seatPlan variable typed to only accept a few parameters
let seatPlan: "aisle" | "middle" | "window";

//allowed
seatPlan = "aisle";
//not allowed
//seatPlan = "crew"
