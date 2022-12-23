/*
Add a method takeDamage to the hero class.
 This method should take one number argument representing the damage. 
This number should be directly subtracted from the hero's health.
 */

class Hero {
    constructor() {
        this.health =50;
    }
    takeDamage(x)
    {
        this.health = this.health - x;
    }
}

module.exports = Hero;