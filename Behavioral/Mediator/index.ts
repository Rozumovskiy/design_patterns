class Helicopter {
    start() {
        console.log('Helicopter started');
    }

    stop() {
        console.log('Helicopter stopped');
    }

    land() {
        console.log('Helicopter landed');
    }
}

class Plane {
    start() {
        console.log('Plane started');
    }

    stop() {
        console.log('Plane stopped');
    }

    land() {
        console.log('Plane landed');
    }
}

interface Mediator {
    landHelicopter(): void;
    landPlane(): void;
    startHelicopter(): void;
    startPlane(): void;
    stopHelicopter(): void;
    stopPlane(): void;
}

class ATCMediator implements Mediator {
    private helicopter: Helicopter;
    private plane: Plane;

    constructor(helicopter: Helicopter, plane: Plane) {
        this.helicopter = helicopter;
        this.plane = plane;
    }

    landHelicopter() {
        this.helicopter.land();
    }

    landPlane() {
        this.plane.land();
    }

    startHelicopter() {
        this.helicopter.start();
    }

    startPlane() {
        this.plane.start();
    }

    stopHelicopter() {
        this.helicopter.stop();
    }

    stopPlane() {
        this.plane.stop();
    }
}

const helicopter = new Helicopter();
const plane = new Plane();
const mediator = new ATCMediator(helicopter, plane);
mediator.landHelicopter();
mediator.landPlane();
mediator.startHelicopter();
mediator.startPlane();
mediator.stopHelicopter();
mediator.stopPlane();

// Helicopter landed
// Plane landed
