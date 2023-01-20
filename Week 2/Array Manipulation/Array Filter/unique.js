//Given an array of values, return an array of unique values.

function unique(array) {
    return array.filter((el ,i)=>{
        return array.indexOf(el)=== i;
    })
}

module.exports = unique;
