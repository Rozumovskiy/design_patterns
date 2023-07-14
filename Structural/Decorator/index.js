var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.start = function () {
        return "Vehicle is starting";
    };
    Vehicle.prototype.stop = function () {
        return "Vehicle stoped";
    };
    Vehicle.prototype.openDoor = function () {
        return "Vehicle open door";
    };
    return Vehicle;
}());
var CarDecorator = /** @class */ (function () {
    function CarDecorator(Vehicle) {
        this.wrapee = Vehicle;
    }
    CarDecorator.prototype.start = function () {
        return this.wrapee.start();
    };
    CarDecorator.prototype.stop = function () {
        return this.wrapee.stop();
    };
    CarDecorator.prototype.openDoor = function () {
        return this.wrapee.openDoor();
    };
    ;
    CarDecorator.prototype.playMusic = function () {
        return 'Play music in car';
    };
    return CarDecorator;
}());
var BikeDecorator = /** @class */ (function () {
    function BikeDecorator(Vehicle) {
        this.wrapee = Vehicle;
    }
    BikeDecorator.prototype.start = function () {
        return this.wrapee.start();
    };
    BikeDecorator.prototype.stop = function () {
        return this.wrapee.stop();
    };
    BikeDecorator.prototype.openDoor = function () {
        return this.wrapee.openDoor();
    };
    ;
    BikeDecorator.prototype.stanBack = function () {
        return 'Standed back in my bicycle';
    };
    return BikeDecorator;
}());
var PlaneDecorator = /** @class */ (function () {
    function PlaneDecorator(Vehicle) {
        this.wrapee = Vehicle;
    }
    PlaneDecorator.prototype.start = function () {
        return this.wrapee.start();
    };
    PlaneDecorator.prototype.stop = function () {
        return this.wrapee.stop();
    };
    PlaneDecorator.prototype.openDoor = function () {
        return this.wrapee.openDoor();
    };
    ;
    PlaneDecorator.prototype.forsage = function () {
        return 'make forsage in my plane';
    };
    return PlaneDecorator;
}());
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.runApplication = function () {
        var source = new Vehicle();
        var c = new CarDecorator(source);
        console.log(c.openDoor());
        console.log(c.start());
        console.log(c.playMusic());
        console.log(c.stop());
        var p = new PlaneDecorator(source);
        console.log(p.openDoor());
        console.log(p.start());
        console.log(p.forsage());
        console.log(p.stop());
        var b = new BikeDecorator(source);
        console.log(b.openDoor());
        console.log(b.start());
        console.log(b.stanBack());
        console.log(b.stop());
    };
    return Application;
}());
var app = new Application();
app.runApplication();
