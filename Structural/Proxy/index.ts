interface IAirConditioning {
    startAirConditioning: () => string;
    stopAirConditioning: () => string;
    upTemperature: () => string;
    downTemperature: () => string;
}

class AirConditioning implements IAirConditioning {
    startAirConditioning() {
        return 'Air conditioning started';
    }

    stopAirConditioning() {
        return 'Air conditioning stoped';
    }

    upTemperature() {
        return 'Temperature up';
    }

    downTemperature() {
        return 'Temperature down';
    }
}

class AirConditioningProxy implements IAirConditioning {
    private wrapped;

    constructor(airConditioning: IAirConditioning) {
        this.wrapped = airConditioning;
    }

    startAirConditioning() {
        return this.wrapped.startAirConditioning();
    }

    stopAirConditioning() {
        return this.wrapped.stopAirConditioning();
    }

    upTemperature() {
        return this.wrapped.upTemperature();
    }

    downTemperature() {
        return this.wrapped.downTemperature();
    }
}

class AirConditioningManager implements IAirConditioning { 
    private airConditioning: IAirConditioning;

    constructor(airConditioning: IAirConditioning) {
        this.airConditioning = airConditioning;
    }

    startAirConditioning() {
        return this.airConditioning.startAirConditioning();
    }

    stopAirConditioning() {
        return this.airConditioning.stopAirConditioning();
    }

    upTemperature() {
        return this.airConditioning.upTemperature();
    }

    downTemperature() {
        return this.airConditioning.downTemperature();
    }
}

const airConditioning = new AirConditioning();
const airConditioningProxy = new AirConditioningProxy(airConditioning);
const manager = new AirConditioningManager(airConditioningProxy);
const startC = manager.startAirConditioning();
console.log(startC);
const upC =  manager.upTemperature();
console.log(upC);
const downC = manager.downTemperature();
console.log(downC);
const stopC = manager.stopAirConditioning();
console.log(stopC);
