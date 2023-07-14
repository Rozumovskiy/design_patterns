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

class CarDecorator implements Vehicle {
    private wrapee;

    constructor(Vehicle) {
        this.wrapee = Vehicle;
    }

    start() {
        return this.wrapee.start();
    }

    stop() {
        return this.wrapee.stop();
    }

    openDoor() {
        return this.wrapee.openDoor();
    };

    playMusic() {
        return 'Play music in car';
    }
}

class BikeDecorator implements Vehicle {
    private wrapee;

    constructor(Vehicle) {
        this.wrapee = Vehicle;
    }

    start() {
        return this.wrapee.start();
    }

    stop() {
        return this.wrapee.stop();
    }

    openDoor() {
        return this.wrapee.openDoor();
    };

    stanBack() {
        return 'Standed back in my bicycle';
    }
}

class PlaneDecorator implements Vehicle {
    private wrapee;

    constructor(Vehicle) {
        this.wrapee = Vehicle;
    }

    start() {
        return this.wrapee.start();
    }

    stop() {
        return this.wrapee.stop();
    }

    openDoor() {
        return this.wrapee.openDoor();
    };

    forsage() {
        return 'make forsage in my plane';
    }
}


class Application {
    runApplication() {
        const source = new Vehicle();
        const c = new CarDecorator(source);
        console.log(c.openDoor());
        console.log(c.start());
        console.log(c.playMusic());
        console.log(c.stop());
        const p = new PlaneDecorator(source);
        console.log(p.openDoor);
        console.log(p.start);
        console.log(p.forsage);
        console.log(p.stop);
        const b = new BikeDecorator(source);
        console.log(b.openDoor());
        console.log(b.start());
        console.log(b.stanBack());
        console.log(b.stop()); 
    }
}

const app = new Application()
app.runApplication();