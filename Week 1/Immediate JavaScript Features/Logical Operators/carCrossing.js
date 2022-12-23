/*
Trouble is, there's only room for 1 car to cross the bridge at a time.
This means that if both cars were to be crossing at the same time, neither would be able to cross.
Complete the carCrossing function to return true if and only if one car is crossing.
*/

function carCrossing(aCrossing, bCrossing) {
    if((!aCrossing && bCrossing)||(aCrossing && !bCrossing))
    return true;
    else
    return false
}

module.exports = carCrossing;