/**
 * This is similar to undo and Redo operation in our computer paint or normal structure.
 */
const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation)
    }

    undo() {
        let op = this.operations.pop();
        this.undos.push(op);
    }

    redo() {
        let op = this.undos.pop();
        this.addOperation(op)
    }

    redoAll() {
        while(! this.undos.isEmpty())
        {
            this.redo()
        }
    }
}

module.exports = OperationManager;