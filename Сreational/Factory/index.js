var Car = /** @class */ (function () {
    function Car(count_wheels, count_doors) {
        this.count_wheels = count_wheels;
        this.count_doors = this.count_doors;
    }
    Car.prototype.start = function () {
        console.log('Car started');
        return 'start';
    };
    Car.prototype.end = function () {
        console.log('Car ended');
        return 'end';
    };
    Car.prototype.priceCar = function () {
        return "this Car cost 4000 and have ".concat(this.count_doors, " doors and ").concat(this.count_wheels, " wheels");
    };
    return Car;
}());
var Bycycle = /** @class */ (function () {
    function Bycycle(count_wheels, count_doors) {
        this.count_wheels = count_wheels;
        this.count_doors = this.count_doors;
    }
    Bycycle.prototype.start = function () {
        console.log('Car started');
        return 'start';
    };
    Bycycle.prototype.end = function () {
        console.log('Car ended');
        return 'end';
    };
    Bycycle.prototype.priceBycle = function () {
        return "this bycycle cost 100 and have ".concat(this.count_doors, " doors and ").concat(this.count_wheels, " wheels");
    };
    return Bycycle;
}());
var car = new Car(4, 4);
console.log(car.start());
console.log(car.priceCar());
console.log(car.end());
var bike = new Bycycle(2, 2);
console.log(bike.start());
console.log(bike.priceBycle());
console.log(bike.end());
