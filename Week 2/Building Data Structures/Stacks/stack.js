//Stack

const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if(this.items.length === MAX_STACK_SIZE){
            throw new Overflow("Stack is OverFlowed")
        }
        this.items.push(item)
    }
    isEmpty() {
        if(this.items.length === 0 )
            return true;
        return false;
    }

    pop() 
    {
        if(this.items.length === 0 ){
            throw new Underflow("Stack is Empty")
        }
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length -1]
    }
}

module.exports = Stack;
