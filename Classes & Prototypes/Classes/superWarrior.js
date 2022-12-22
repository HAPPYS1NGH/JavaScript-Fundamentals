
/*
Add a rage property to the Warrior. The value of rage will start at 0.
*/

const Hero = require('./Hero');

class Warrior extends Hero {
    constructor()
    {
        super();
        this.rage =0;
    }
}

module.exports = Warrior;