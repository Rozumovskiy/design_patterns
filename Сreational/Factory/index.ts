interface ITransport {
    count_wheels: number;
    start(): string;
    end(): string;
    count_doors: number;
}

class Car implements ITransport {
    count_wheels: number;
    count_doors: number;

    constructor(count_wheels: number, count_doors: number) {
        this.count_wheels = count_wheels;
        this.count_doors = count_doors;
    }
    
    start() {
        console.log('Car started');
        return 'start';
    }

    end() {
        console.log('Car ended');
        return 'end';
    }

    priceCar() {
        return `this Car cost 4000 and have ${this.count_doors} doors and ${this.count_wheels} wheels`
    }

}

class Bycycle implements ITransport {
    count_wheels: number;
    count_doors: number;

    constructor(count_wheels: number, count_doors: number) {
        this.count_wheels = count_wheels;
        this.count_doors = this.count_doors;
    }
    
    start() {
        console.log('Bike started');
        return 'start';
    }

    end() {
        console.log('Bike ended');
        return 'end';
    }

    priceBycle() {
        return `this bycycle cost 100 and have ${this.count_doors} doors and ${this.count_wheels} wheels`
    }

}

const car = new Car(4, 4);
console.log(car.start())
console.log(car.priceCar())
console.log(car.end());
const bike = new Bycycle(2, 2);
console.log(bike.start())
console.log(bike.priceBycle())
console.log(bike.end());

