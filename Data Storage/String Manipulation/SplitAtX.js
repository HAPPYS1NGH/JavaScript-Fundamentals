/*
Let's find the longer half of the string before and after the x!
First, you'll need to find the lower-case x.
Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
Take the longer string and return it!
*/

function splitAtX(string) {
    let c;
    for(let i=0;i<string.length;i++)
    {
        if(string[i]==='x')
        {
            c=i;
            break;
        }
    }
    let s1= string.slice(0,c);
    let s2=string.slice(c+1);
    
    if(s1.length>s2.length)
        return s1;
    else
        return s2;    
}


module.exports = splitAtX;