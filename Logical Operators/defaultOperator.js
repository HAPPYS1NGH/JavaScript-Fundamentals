// The double function here is almost complete!
// We also want double to be able to handle when x is undefined.
// If no value is provided for x, return 0.
function double(x) {
    return (x * 2 ) || 0;
}

module.exports = double;
