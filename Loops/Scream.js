/*
Let's create a function scream which will take in a value n and 
return a string with the letter "a" repeated that many times.
*/

function scream(n) {
    scream='';
    for(let i=1;i<=n;i++)
    {
    scream+='a';
    }
    return scream;
}

module.exports = scream;