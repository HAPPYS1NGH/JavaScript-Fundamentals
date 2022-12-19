/*
Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.
Modify the array directly and do not return anything from this function.
*/

function removeOccurrences(array, num) {
    for(let i =array.length - 1 ;i>= 0; i--)
    {
        if(array[i]==num)
        {
            array.splice(i,1);
        }
    }
}

module.exports = removeOccurrences;