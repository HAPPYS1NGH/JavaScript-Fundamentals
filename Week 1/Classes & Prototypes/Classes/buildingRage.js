
/*
Add a method takeDamage to the Warrior class that will increment rage by 1 each time the warrior takes damage.
It should also invoke takeDamage method on Hero which will inflict the damage on the hero's health.
*/

const Hero = require('./Hero');

class Warrior extends Hero {
    constructor()
    {
        super();
        this.rage =0;
    }
    takeDamage(x)
    {
        super.takeDamage(x);
        this.rage +=1;
    }
}

module.exports = Warrior;