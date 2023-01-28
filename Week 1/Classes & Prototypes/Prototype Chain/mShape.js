// Our Shape "Constructor"
function Shape(x, y) {
    this.position ={
        x :  x,
        y :  y
        }
 }
 Shape.prototype.move = function (x, y) {
         this.position.x +=x;
         this.position.y +=y;
 }
 module.exports = Shape;