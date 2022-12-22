/*
The argument fn is a function that will throw an error when invoked. 
Catch the error that is thrown when invoking fn.
Modify catchError to return the error if one is thrown.
If no error is thrown, return false.
*/

function catchError(fn) {
    try{
        fn();
    }
    catch(err)
    {
       return err
    }
    return false;
}

module.exports = catchError;