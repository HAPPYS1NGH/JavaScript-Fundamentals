/*
Take the array arr and add one to every element, return the resulting array.
*/
 
function plusOne(arr) {
    let a =arr.map((value)=>{
        return value + 1
    })
    return a;
}

module.exports = plusOne;