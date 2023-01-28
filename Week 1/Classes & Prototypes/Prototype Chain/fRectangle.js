const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x, y);
    this.height = height;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.flip = function() {
    const width = this.width;
    this.width = this.height;
    this.height = width;
}

module.exports = Rectangle;