const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
    }
    request(food) {
        const make = makeFood(food)
        make.then(()=>{
            this.isReady =true;
        })
        make.catch((error)=>
        {
            this.error =error;
        })
    }
}

module.exports = Order;