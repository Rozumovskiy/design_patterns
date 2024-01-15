var Helicopter = /** @class */ (function () {
    function Helicopter() {
    }
    Helicopter.prototype.start = function () {
        console.log('Helicopter started');
    };
    Helicopter.prototype.stop = function () {
        console.log('Helicopter stopped');
    };
    Helicopter.prototype.land = function () {
        console.log('Helicopter landed');
    };
    return Helicopter;
}());
var Plane = /** @class */ (function () {
    function Plane() {
    }
    Plane.prototype.start = function () {
        console.log('Plane started');
    };
    Plane.prototype.stop = function () {
        console.log('Plane stopped');
    };
    Plane.prototype.land = function () {
        console.log('Plane landed');
    };
    return Plane;
}());
var ATCMediator = /** @class */ (function () {
    function ATCMediator(helicopter, plane) {
        this.helicopter = helicopter;
        this.plane = plane;
    }
    ATCMediator.prototype.landHelicopter = function () {
        this.helicopter.land();
    };
    ATCMediator.prototype.landPlane = function () {
        this.plane.land();
    };
    return ATCMediator;
}());
var helicopter = new Helicopter();
var plane = new Plane();
var mediator = new ATCMediator(helicopter, plane);
mediator.landHelicopter();
mediator.landPlane();
// Helicopter landed
// Plane landed
