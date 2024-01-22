var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.execute = function (a, b) {
        return a + b;
    };
    return Add;
}());
var Subtract = /** @class */ (function () {
    function Subtract() {
    }
    Subtract.prototype.execute = function (a, b) {
        return a - b;
    };
    return Subtract;
}());
var Multiply = /** @class */ (function () {
    function Multiply() {
    }
    Multiply.prototype.execute = function (a, b) {
        return a * b;
    };
    return Multiply;
}());
var Divide = /** @class */ (function () {
    function Divide() {
    }
    Divide.prototype.execute = function (a, b) {
        return a / b;
    };
    return Divide;
}());
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.executeStrategy = function (a, b) {
        return this.strategy.execute(a, b);
    };
    return Context;
}());
var context = new Context(new Add());
console.log(context.executeStrategy(1, 2));
var context2 = new Context(new Subtract());
console.log(context2.executeStrategy(1, 2));
var context3 = new Context(new Multiply());
console.log(context3.executeStrategy(1, 2));
