/*
Add a constructor function that takes one argument, data. 
Store data on the node instance.
Also, in the constructor, add a property next to the node instance. 
For now, set this property to null.*/

class Node {
    constructor(data){
        this.data =data;
        this.next =null;
    }
}

module.exports = Node;
