/*
Write a function isPalindrome that takes a word string and
Returns true if the word is a palindrome or false if it is not.
A palindrome is a word that is spelled the same forwards as it is backwards.
*/

function isPalindrome(string) {
    
    let rev=[];
    
    for(let i=string.length -1 ;i>=0;i--)
    {
        rev = rev + string[i];
    }

    if(rev === string)
    return true;
    else
    return false;

}

module.exports = isPalindrome;