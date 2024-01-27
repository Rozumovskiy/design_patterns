var BMW = /** @class */ (function () {
    function BMW() {
    }
    BMW.prototype.accept = function (visitor) {
        visitor.visitBMW(this);
    };
    BMW.prototype.move = function () {
        console.log('BMW is moving');
    };
    BMW.prototype.sale = function () {
        console.log('BMW is on sale');
    };
    return BMW;
}());
var Benz = /** @class */ (function () {
    function Benz() {
    }
    Benz.prototype.accept = function (visitor) {
        visitor.visitBenz(this);
    };
    Benz.prototype.move = function () {
        console.log('Benz is moving');
    };
    Benz.prototype.sale = function () {
        console.log('Benz is on sale');
    };
    return Benz;
}());
var Audi = /** @class */ (function () {
    function Audi() {
    }
    Audi.prototype.accept = function (visitor) {
        visitor.visitAudi(this);
    };
    Audi.prototype.move = function () {
        console.log('Audi is moving');
    };
    Audi.prototype.sale = function () {
        console.log('Audi is on sale');
    };
    return Audi;
}());
var CarVisitor = /** @class */ (function () {
    function CarVisitor() {
    }
    CarVisitor.prototype.visitBMW = function (car) {
        car.move();
        car.sale();
    };
    CarVisitor.prototype.visitBenz = function (car) {
        car.move();
        car.sale();
    };
    CarVisitor.prototype.visitAudi = function (car) {
        car.move();
        car.sale();
    };
    return CarVisitor;
}());
var carVisitor = new CarVisitor();
var elements = [new BMW(), new Benz(), new Audi()];
elements.forEach(function (element) {
    element.accept(carVisitor);
});
