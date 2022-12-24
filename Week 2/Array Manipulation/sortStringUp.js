/**
 * 
 * Given an array of strings, sort them in ascending order ('a','b','c'...) and return the sorted array.
 */

function sortStringsUp(array) {
    array.sort(function comparison(a, b) {
        return a.localeCompare(b);
    });
}

module.exports = sortStringsUp;