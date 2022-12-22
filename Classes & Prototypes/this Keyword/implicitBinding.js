/*Add a function getName to the obj that will retrieve the name
when it is called on an object.
*/

const obj = {
    name: 'Bob',
    getName : function(){
        return this.name
    }
}

module.exports = obj;