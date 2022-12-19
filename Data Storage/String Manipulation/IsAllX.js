/*
Complete the function isAllX to determine if the entire string is made of lower-case x or upper-case X. 
Return true if they are, false if not.
*/

function isAllX(string) {
    string =string.toUpperCase();
    let len = string.length;
    for(let i=0;i<len;i++)
    {
    if(string[i]!=='X')
    return false;
    }
    return true;
}

module.exports = isAllX;