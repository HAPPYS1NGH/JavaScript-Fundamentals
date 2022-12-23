/*
Write a function countElements that takes in an array 
Returns an object a count of each element in the array.
Difficult
*/

function countElements(elements) {
    const myObject = {};
        for(let i=0;i<elements.length;i++)
        {
            if(myObject[elements[i]] >=1)
            myObject[elements[i]] ++ ;
            else
            myObject[elements[i]] =1;
        }
        return myObject;
    
    }
    
    module.exports = countElements;
    
    