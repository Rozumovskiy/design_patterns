var AirConditioning = /** @class */ (function () {
    function AirConditioning() {
    }
    AirConditioning.prototype.startAirConditioning = function () {
        return 'Air conditioning started';
    };
    AirConditioning.prototype.stopAirConditioning = function () {
        return 'Air conditioning stoped';
    };
    AirConditioning.prototype.upTemperature = function () {
        return 'Temperature up';
    };
    AirConditioning.prototype.downTemperature = function () {
        return 'Temperature down';
    };
    return AirConditioning;
}());
var AirConditioningProxy = /** @class */ (function () {
    function AirConditioningProxy(airConditioning) {
        this.log = [];
        this.wrapped = airConditioning;
    }
    AirConditioningProxy.prototype.startAirConditioning = function () {
        this.log.push('Air conditioning started');
        return this.wrapped.startAirConditioning();
    };
    AirConditioningProxy.prototype.stopAirConditioning = function () {
        this.log.push('Air conditioning stoped');
        return this.wrapped.stopAirConditioning();
    };
    AirConditioningProxy.prototype.upTemperature = function () {
        this.log.push('Temperature up');
        return this.wrapped.upTemperature();
    };
    AirConditioningProxy.prototype.downTemperature = function () {
        this.log.push('Temperature down');
        return this.wrapped.downTemperature();
    };
    return AirConditioningProxy;
}());
var AirConditioningManager = /** @class */ (function () {
    function AirConditioningManager(airConditioning) {
        this.airConditioning = airConditioning;
    }
    AirConditioningManager.prototype.startAirConditioning = function () {
        return this.airConditioning.startAirConditioning();
    };
    AirConditioningManager.prototype.stopAirConditioning = function () {
        return this.airConditioning.stopAirConditioning();
    };
    AirConditioningManager.prototype.upTemperature = function () {
        return this.airConditioning.upTemperature();
    };
    AirConditioningManager.prototype.downTemperature = function () {
        return this.airConditioning.downTemperature();
    };
    return AirConditioningManager;
}());
var airConditioning = new AirConditioning();
var airConditioningProxy = new AirConditioningProxy(airConditioning);
var manager = new AirConditioningManager(airConditioningProxy);
var startC = manager.startAirConditioning();
console.log(startC);
var upC = manager.upTemperature();
console.log(upC);
var downC = manager.downTemperature();
console.log(downC);
var stopC = manager.stopAirConditioning();
console.log(stopC);
console.log(airConditioningProxy.log);
