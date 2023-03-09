// This array can accept strings and numbers, it doesn't matter what order they are in
var user = ["hc", 1];
// Tuples enforce the order of the data
var user2;
user2 = ["hc", 131, true];
// Values declared in a tuple can still be changed as long as they are the right data type
var newUser = [112, "chunkie@web.spiderman"];
newUser[1] = "hc.com";
// -- Weird Behavior (X-files theme) -- Array methods can break tuples
// You shouldn't be able to push a boolean onto the end of this but you can
// newUser.push(true)
// Enums - Allow you to define a set of named constants
// Enums can be numeric or string based
// Undefined enums will increment automatically (notice AISLE = 0, MIDDLE = 1, etc...)
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
    seatChoice[seatChoice["BASEMENT"] = 3] = "BASEMENT";
})(seatChoice || (seatChoice = {}));
// Numbers can be defined, will still count from the last number
var seatChoice2;
(function (seatChoice2) {
    seatChoice2[seatChoice2["AISLE"] = 2] = "AISLE";
    seatChoice2[seatChoice2["MIDDLE"] = 3] = "MIDDLE";
    seatChoice2[seatChoice2["WINDOW"] = 6] = "WINDOW";
    seatChoice2[seatChoice2["BASEMENT"] = 7] = "BASEMENT";
})(seatChoice2 || (seatChoice2 = {}));
var hcSeat = seatChoice.BASEMENT;
