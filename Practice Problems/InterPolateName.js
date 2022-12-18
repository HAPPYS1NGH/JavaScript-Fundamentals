/*
A string is stored in the variable fakeName.
Take this fake name and use it to replace every occurrence of "John" in the message.
*/

const fakeName = require('./fakeName');

const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

module.exports = message;