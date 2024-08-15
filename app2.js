"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app1_1 = require("./app1");
var c1 = new app1_1.Circle('My Circle', 6);
c1.calculateArea();
console.log("The name of Shape is:".concat(c1.name));
console.log("The area of Circle is:".concat(c1.area));
