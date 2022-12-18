/*
The function maxSum takes a number argument num.
Your goal is find the sum all of numbers, starting from 1, up to and including num.
*/

function maxSum(num) {
    let Sum=0;
    for(let i=1;i<=num;i++)
    Sum+=i;
    return Sum;
}

module.exports = maxSum;