/*
Within the function Celebrity, a method is used to fetch the celebrity's age.
The second argument to fetchAge is a callback function.
The callback function will receive age as an argument.
 */

const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, function (age) {
        this.age = age;
    }.bind(this));
}

module.exports = Celebrity;