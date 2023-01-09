/*
    Given an array of elements in squaredMap, return an array with each element squared:
*/
const squared = require('./squared');

function squaredMap(arr) {
    const array  = arr.map(ele => squared(ele))
    return array;
}

module.exports = squaredMap;
