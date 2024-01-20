"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var Context = /** @class */ (function () {
    function Context(state) {
        this.state = state;
    }
    Context.prototype.setState = function (state) {
        this.state = state;
    };
    Context.prototype.getState = function () {
        return this.state;
    };
    return Context;
}());
var ConcreteStateA = /** @class */ (function () {
    function ConcreteStateA() {
    }
    ConcreteStateA.prototype.handle = function (context) {
        console.log("`handle` method of ConcreteStateA is being called!");
        context.setState(new ConcreteStateB());
    };
    return ConcreteStateA;
}());
var ConcreteStateB = /** @class */ (function () {
    function ConcreteStateB() {
    }
    ConcreteStateB.prototype.handle = function (context) {
        console.log("`handle` method of ConcreteStateB is being called!");
        context.setState(new ConcreteStateA());
    };
    return ConcreteStateB;
}());
function run() {
    var context = new Context(new ConcreteStateA());
    context.getState().handle(context);
    context.getState().handle(context);
    context.getState().handle(context);
    context.getState().handle(context);
}
exports.run = run;
run();
