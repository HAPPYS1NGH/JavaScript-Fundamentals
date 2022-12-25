/*
Just like the example above, use setTimeout and invoke callbackFunction 1000 milliseconds (1 second) after runCallback has been called.} callbackFunction 
 */

function runCallback(callbackFunction) {
    setTimeout(() => {
        callbackFunction();
    }, 1000);
}

module.exports = runCallback;