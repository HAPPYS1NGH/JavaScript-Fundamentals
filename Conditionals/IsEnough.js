/*
We have a function isEnough that has two parameters: cost and money.
Your goal is to determine if the money is enough to cover the cost. 
The money should be at least as great as the cost. If it's greater, no problem! Either way, return true.
If the money isn't enough, return false. 😭
*/

function isEnough(cost, money) {
    if(money>=cost)
    return true
    else
    return false
}

module.exports = isEnough;