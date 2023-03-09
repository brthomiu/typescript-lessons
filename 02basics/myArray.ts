// Instantiating an array without a type will default it to "never" and throw an error if you populate it
const badCats = [];

badCats.push("Coaster");

// Arrays with types
const cats: string[] = [];

const catAges: number[] = [];

cats.push("Coaster");
catAges.push("35");

// Type aliases can be assigned to arrays
type User = {
  name: string;
  isActive: Boolean;
};

const allUsers: User[] = [];

allUsers.push({ name: "Mister", isActive: false });

// Array of array of numbers
const Data : number[][] = [
    [255, 255, 255],
    [123, 456, 789]
]