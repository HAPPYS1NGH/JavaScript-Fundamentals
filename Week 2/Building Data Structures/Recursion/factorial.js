// Factorial of num using Recursion

function factorial(n) {
    if(n==1)
    {
        return 1;
    }
        return n* factorial(n-1)
}

module.exports = factorial;