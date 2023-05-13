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
// Factory class
var VehicleFactory = /** @class */ (function () {
    function VehicleFactory() {
    }
    VehicleFactory.prototype.createVehicle = function (type) {
        if (type === "car") {
            return new Car();
        }
        else if (type === "bicycle") {
            return new Bicycle();
        }
        return null;
    };
    return VehicleFactory;
}());
// Usage
var factory = new VehicleFactory();
var myCar = factory.createVehicle("car");
var myBicycle = factory.createVehicle("bicycle");
if (myCar) {
    console.log("Car wheels:", myCar.count_wheels);
    console.log("Car doors:", myCar.count_doors);
    myCar.start();
    myCar.end();
}
if (myBicycle) {
    console.log("Bicycle wheels:", myBicycle.count_wheels);
    console.log("Bicycle doors:", myBicycle.count_doors);
    myBicycle.start();
    myBicycle.end();
}
