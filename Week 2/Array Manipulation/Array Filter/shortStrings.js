/*
Given an array of strings, keep only the strings whose length is at most 3.
*/
function shortStrings(array) {
    return array.filter(el =>{
        return el.length<=3
    })
}

module.exports = shortStrings;
