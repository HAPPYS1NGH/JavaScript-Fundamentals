/*
Given an array of numbers sort them in descending order and return the array.
*/

function sortDown(array) {
    array.sort(function (a,b){
        return b-a;
    })
}

module.exports = sortDown;