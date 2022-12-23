/*
Given a string, convert it to a number.
If the string is not a number, return 0.

The isNaN() function determines whether a value is NaN when converted to a number.
Because coercion inside the isNaN() function can be surprising,
you may alternatively want to use Number.isNaN().
*/

function toNumber(string) {
    string = +string;
    if( isNaN(string))
    {
        return 0;
    }
    return string;
}

module.exports = toNumber;

// Alternate Way

// function toNumber(string) {
//     string = +string;
//     return string || 0;
// }

// module.exports = toNumber;