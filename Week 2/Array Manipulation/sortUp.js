/*
Given an array of numbers, sort the numbers ascending(1, 2, 3...) 
return the sorted array.
*/

function sortUp(array) {
    array.sort(function (a, b) { return a - b })
}

module.exports = sortUp;