/*
The object passed into removeSecret has a secret key that must be removed!
Set the value of this key to undefined to pass the test cases. Modify the object directly, there is no need to return it.
*/

function removeSecret(object) {
    delete object.secret;  //object.secret = undefined;
}

module.exports = removeSecret;