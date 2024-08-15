"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(name, radius) {
        this.radius = radius;
        this.area = 0;
        this.name = name;
    }
    Circle.prototype.calculateArea = function () {
        this.area = 3.14 * this.radius * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
