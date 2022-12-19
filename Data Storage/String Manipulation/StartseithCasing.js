/*
Let's update our startsWithX function to return true for an upper-case X as well as a lower-case x.
*/

function startsWithX(string) {
    let s1 = string.toLowerCase();
    if(s1.charAt(0)==='x')
    return true;
    else
    return false;
}

module.exports = startsWithX;