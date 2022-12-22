/*
Given two values a and b, combine them together as strings and return the result.
The values may be a number, a boolean or a string.
*/

function combineToString(a, b) {
    a=a.toString();
    return a+b
    // return a+""+b+"";
}

module.exports = combineToString;