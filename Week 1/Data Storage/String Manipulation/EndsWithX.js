/*
Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. 
Return true if it is, false if not.
*/

function endsWithX(string) {
    let len=string.length;
    let s1=string.toLowerCase();

    if(s1[len-1]==='x')
    return true;
    else
    return false;
}

module.exports = endsWithX;