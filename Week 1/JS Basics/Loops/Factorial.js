/*
Taking in some integer value n, find the factorial for that number and return it.
*/

function factorial(n) {
    let fact=1;
    for(i=1;i<=n;i++)
    fact*=i;
    return fact;
}

module.exports = factorial;