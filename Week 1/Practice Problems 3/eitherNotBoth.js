
/*
Write a function eitherNotBoth that takes in a number
Returns true if the the number is divisible by either 3 or 5, but not both.
Return false otherwise.
*/

function eitherNotBoth(num) {
    if(num%3===0 && num%5===0)
    return false;
    else if(num%3===0|| num%5===0)
    {
        return true;
    }
    return false;
}

module.exports = eitherNotBoth;