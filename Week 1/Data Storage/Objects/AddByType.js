/*
Modify the numberOfPizzas function to only count pizzas when the order.type is equal to ORDER_TYPES.PIZZA.
The orders will have a type keyword:
*/

const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let totalPizzas = 0;
    for(let i=0;i<orders.length;i++)
    {
        if (orders[i].type == ORDER_TYPES.PIZZA)
        totalPizzas += orders[i].pizzas;
    }
    return totalPizzas;
}

module.exports = numberOfPizzas; 