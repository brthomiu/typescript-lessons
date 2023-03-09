// This array can accept strings and numbers, it doesn't matter what order they are in
let user: (string | number)[] = ["hc", 1]

// Tuples enforce the order of the data
let user2: [string, number, boolean]

user2 = ["hc", 131, true]

//throws error because types are out of order
// user2 = [131, "hc", true]

type User = [number, string]

// Values declared in a tuple can still be changed as long as they are the right data type
const newUser: User = [112, "chunkie@web.spiderman"]

newUser[1] = "hc.com"

// -- Weird Behavior (X-files theme) -- Array methods can break tuples
// You shouldn't be able to push a boolean onto the end of this but you can
// newUser.push(true)

// Enums - Allow you to define a set of named constants
// Enums can be numeric or string based
// Undefined enums will increment automatically (notice AISLE = 0, MIDDLE = 1, etc...)
enum seatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    BASEMENT
}

// Numbers can be defined, will still count from the last number
enum seatChoice2 {
    AISLE = 2,
    MIDDLE,
    WINDOW = 6,
    BASEMENT
}

// Strings must have something defined after them, can't count up from a string
// enum seatChoice3 {
//     AISLE = "One"
//     MIDDLE,
//     WINDOW,
//     BASEMENT
// }

// Declaring enums with cost transpiles to a lot less JS
const enum seatChoice4 {
    AISLE,
    MIDDLE,
    WINDOW,
    BASEMENT
}

const hcSeat = seatChoice.BASEMENT