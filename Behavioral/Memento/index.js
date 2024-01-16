var Originator = /** @class */ (function () {
    function Originator(state) {
        this.state = state;
    }
    Originator.prototype.getState = function () {
        return this.state;
    };
    Originator.prototype.setState = function (state) {
        this.state = state;
    };
    Originator.prototype.save = function () {
        return new Memento(this.state);
    };
    Originator.prototype.restore = function (memento) {
        this.state = memento.getState();
    };
    return Originator;
}());
var Memento = /** @class */ (function () {
    function Memento(state) {
        this.state = state;
    }
    Memento.prototype.getState = function () {
        return this.state;
    };
    return Memento;
}());
var CareTaker = /** @class */ (function () {
    function CareTaker() {
        this.mementos = [];
    }
    CareTaker.prototype.add = function (memento) {
        this.mementos.push(memento);
    };
    CareTaker.prototype.get = function (index) {
        return this.mementos[index];
    };
    return CareTaker;
}());
var originator = new Originator('State #1');
var careTaker = new CareTaker();
careTaker.add(originator.save());
originator.setState('State #2');
careTaker.add(originator.save());
originator.setState('State #3');
careTaker.add(originator.save());
originator.setState('State #4');
