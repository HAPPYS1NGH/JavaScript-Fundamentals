/*
complete the top double function to find the largest double for the value that is below the top
*/
function topDouble(value, top) {
    while(value*2 < top)
    {
        value*=2;
    }
    return value;
}

module.exports = topDouble;