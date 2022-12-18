/*
The function smallerNumber will be given two unequal numbers: num1 and num2.
Your goal is to find the smaller number and return it!
*/

function smallerNumber(num1, num2) {
    if(num1<num2)
    return num1;
    else
    return num2;
}

module.exports = smallerNumber;