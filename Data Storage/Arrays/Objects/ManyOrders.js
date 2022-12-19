/*
Given an array of pizza orders, return the total number of pizzas ordered.
*/
function numberOfPizzas(orders) {
    let totalPizzas = 0;
    for(let i=0;i<orders.length;i++)
    {
        totalPizzas += orders[i].pizzas;
    }
    return totalPizzas;
}

module.exports = numberOfPizzas;