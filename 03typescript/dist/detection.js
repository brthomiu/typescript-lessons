"use strict";
// This returns an error because the val could be a number and is incompatible with string methods
// function detectType(val: number | string){
//     return val.toLowerCase
// }
// Conditionals can be used to solve this
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    else {
        return val + 3;
    }
}
// Don't forget to handle all of your types! Documentation - typeguards
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
// Dangerous example from documentation
// This doesn't handle an empty correctly string, since an empty string is a falsy value
function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
