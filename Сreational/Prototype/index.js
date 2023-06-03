console.log('----');
var Prototype = /** @class */ (function () {
    function Prototype() {
    }
    Prototype.prototype.clone = function () {
        var clone = Object.create(this);
        return clone;
    };
    return Prototype;
}());
var p1 = new Prototype();
p1.countDoors = 4;
p1.createdAt = new Date();
var p2 = p1.clone();
