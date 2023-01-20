/* 
  Given an array of elements, keep only the first 3 elements.
  Return an array with only these three elements included.
*/


function firstThree(array) {
    return array.filter((el , i)=>{
        return i<3
    })
}

module.exports = firstThree;
