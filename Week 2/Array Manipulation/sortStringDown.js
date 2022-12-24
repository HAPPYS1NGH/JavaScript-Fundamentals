/*
Given an array of strings, 
sort them in descending order ('a','b','c'...) and return the sorted array.
*/


function sortStringsDown(array) {
    array.sort(function comparison(a, b) {
        return b.localeCompare(a);
    });
}

module.exports = sortStringsDown;