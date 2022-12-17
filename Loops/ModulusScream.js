/*
Let's modify our function to return a scream alternating between lower and capital case.
*/

function scream(n) {
    scream='';
    for(let i=1;i<=n;i++)
    {
        if(i%2==0)
        scream+='A';
        else
    scream+='a';
    }
    return scream;
}

module.exports = scream;