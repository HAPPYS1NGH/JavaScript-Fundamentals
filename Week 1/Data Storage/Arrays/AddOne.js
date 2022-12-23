/*
Complete the addOne function to add 1 to every element within the array.
 Since we are modifying the array directly do not return it.
*/

function addOne(array) {
    for( let i=0; i<array.length; i++)
    {
        array[i] = array[i]+1;
    }
}

module.exports = addOne;