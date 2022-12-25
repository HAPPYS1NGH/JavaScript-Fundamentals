/*
We're going to write two functions for our dialog component:
onClose - This method will take a callback function as an argument and store it on our Dialog instance.
close - This function will be used to close the dialog. When we close the dialog, we'll want to call the callbackFunction.*/

class Dialog {
    constructor() {
        this.callbackFunctions = [];
    }
    close() {
        this.callbackFunctions.forEach((callbackFn) => {
            callbackFn();
        });
    }
    onClose(callbackFunction) {
        this.callbackFunctions.push(callbackFunction);
    }
}

module.exports = Dialog;