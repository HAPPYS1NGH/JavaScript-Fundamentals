const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}


Circle.prototype = Object.create(Shape.prototype);

module.exports = Circle;