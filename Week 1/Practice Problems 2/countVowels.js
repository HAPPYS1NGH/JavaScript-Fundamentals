/*
Write a function countVowels that takes in a string and counts how many vowels there are in the word. Vowels include: "a", "e", "i", "o", and "u".
Handle lowercase and uppercase vowels.
*/

function countVowels(str) {
    str=str.toLowerCase();
    let count =0;
    for(let i=0;i<str.length;i++)
    {
        let ch =str.charAt(i);
        if(ch==='a' || ch==='e' || ch==='i'|| ch==='o' || ch ==='u')
            count ++;
    }
    return count;
}

module.exports = countVowels;