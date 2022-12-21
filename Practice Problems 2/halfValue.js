/*
The function halfValue takes an array of numbers.
 It should return a new array with all the original values halved.
Odd numbers should be rounded up to the nearest whole number.
*/
function halfValue(numbers) {
    const newNumbers =[];
    for(let i=0;i< numbers.length;i++)
    {
        if(numbers[i]%2 !==0)
            newNumbers[i] = (numbers[i]+1)/2;   
        else
            newNumbers[i] = numbers[i]/2;               
    }
    return newNumbers
}

module.exports = halfValue;