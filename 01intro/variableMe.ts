let greetings: string = "Yucky, stinky";

console.log(greetings);

// Obvious types don't need to be declared thanks to type inference, examples below

// number

let userId = 334455

// boolean

let isLoggedIn = false

// any
// any basically turns off type checking, tsConfig has a noImplicitAny setting to prevent using any

let hero;

function getHero() {
    return "boggs"
}

hero = getHero()

export {};
