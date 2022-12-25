/**
 * Map each element in the array to its new value returned by the callback function.
 */
function map(arr, callback) {
    let array=[];
    for(let i in arr){
        array[i] = callback(arr[i] , i)
    }
    return array
}

module.exports = map;