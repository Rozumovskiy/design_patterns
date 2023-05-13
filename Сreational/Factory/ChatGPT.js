var Car = /** @class */ (function () {
    function Car() {
        this.count_wheels = 4;
        this.count_doors = 4;
    }
    Car.prototype.start = function () {
        console.log("Starting the car...");
    };
    Car.prototype.end = function () {
        console.log("Stopping the car...");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle() {
        this.count_wheels = 2;
        this.count_doors = 0;
    }
    Bicycle.prototype.start = function () {
        console.log("Starting the bicycle...");
    };
    Bicycle.prototype.end = function () {
        console.log("Stopping the bicycle...");
    };
    return Bicycle;
}());
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    CarFactory.prototype.createVehicle = function () {
        return new Car();
    };
    return CarFactory;
}());
var BicycleFactory = /** @class */ (function () {
    function BicycleFactory() {
    }
    BicycleFactory.prototype.createVehicle = function () {
        return new Bicycle();
    };
    return BicycleFactory;
}());
// Usage
var carFactory = new CarFactory();
var bicycleFactory = new BicycleFactory();
var myCar = carFactory.createVehicle();
var myBicycle = bicycleFactory.createVehicle();
console.log("Car wheels:", myCar.count_wheels);
console.log("Car doors:", myCar.count_doors);
myCar.start();
myCar.end();
console.log("Bicycle wheels:", myBicycle.count_wheels);
console.log("Bicycle doors:", myBicycle.count_doors);
myBicycle.start();
myBicycle.end();
