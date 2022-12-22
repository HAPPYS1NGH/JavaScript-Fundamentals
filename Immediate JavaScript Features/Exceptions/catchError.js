/*
The argument fn is a function that will throw an error when invoked. 
Catch the error that is thrown when invoking fn.
*/

function catchError(fn) {
    try{
        fn();
    }
    catch(err)
    {
       
    }
}

module.exports = catchError;