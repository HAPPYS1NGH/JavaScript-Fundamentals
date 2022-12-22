/*
Time to throw your first error! 
Simply throw a new error inside the throwError function.
*/

function throwError() {
    const d=0;

    if(d===0)
    throw new Error("Cannot divide by 0");
}

module.exports = throwError;