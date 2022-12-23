// Write a function sumTogether that takes two arrays of numbers
//  returns a single array with the sum of each corresponding index value.

function sumTogether(arr1, arr2) {
    const array=[];
    for(let i=0;i<arr1.length;i++)
    {
        array[i]= arr1[i]+ arr2[i];
    }
    return array;
}

module.exports = sumTogether;