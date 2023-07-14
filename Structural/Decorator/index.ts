interface IVehicle {
    start: () => string;
    stop: () => string;
    openDoor: () => string;
}

class Vehicle implements IVehicle {
    start() {
        return `Vehicle is starting`;
    }

    stop() {
        return `Vehicle stoped`;
    }

    openDoor() {
        return `Vehicle open door`;
    }
}

class CarDecorator implements IVehicle {
    private wrapped;

    constructor(vehicle: IVehicle) {
        this.wrapped = vehicle;
    }

    start() {
        return this.wrapped.start();
    }

    stop() {
        return this.wrapped.stop();
    }

    openDoor() {
        return this.wrapped.openDoor();
    };

    playMusic() {
        return 'Play music in car';
    }
}

class BikeDecorator implements IVehicle {
    private wrapped;

    constructor(vehicle: IVehicle) {
        this.wrapped = vehicle;
    }

    start() {
        return this.wrapped.start();
    }

    stop() {
        return this.wrapped.stop();
    }

    openDoor() {
        return this.wrapped.openDoor();
    };

    stanBack() {
        return 'Standed back in my bicycle';
    }
}

class PlaneDecorator implements IVehicle {
    private wrapped;

    constructor(vehicle: IVehicle) {
        this.wrapped = vehicle;
    }

    start() {
        return this.wrapped.start();
    }

    stop() {
        return this.wrapped.stop();
    }

    openDoor() {
        return this.wrapped.openDoor();
    };

    forsage() {
        return 'make forsage in my plane';
    }
}


class Application {
    runApplication() {
        const source: IVehicle = new Vehicle();
        const carD = new CarDecorator(source);
        const c = new CarDecorator(carD);
        console.log(c.openDoor());
        console.log(c.start());
        console.log(c.playMusic());
        console.log(c.stop());
        const p = new PlaneDecorator(source);
        console.log(p.openDoor());
        console.log(p.start());
        console.log(p.forsage());
        console.log(p.stop());
        const b = new BikeDecorator(source);
        console.log(b.openDoor());
        console.log(b.start());
        console.log(b.stanBack());
        console.log(b.stop()); 
    }
}

const app = new Application()
app.runApplication();