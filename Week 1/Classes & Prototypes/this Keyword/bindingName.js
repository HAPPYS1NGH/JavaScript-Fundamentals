// Create a function which retrieves the property name on this.

function thisName() {
    return this.name;
}

const newFunction = thisName.bind({ name: 'Bob' });

module.exports = newFunction; 