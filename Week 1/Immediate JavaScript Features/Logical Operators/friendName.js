/*
The function friendName currently retrieves the name property from the friend.
The problem is, sometimes friend is undefined. When this is the case
Return undefined without throwing an exception.
*/

function friendName(friend) {
    return ( friend && friend.name );
}

module.exports = friendName;