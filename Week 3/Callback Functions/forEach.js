/*
This function will take two parameters:
An array of elements
A callback function that we want to run for each element in the array
*/

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

module.exports = forEach;