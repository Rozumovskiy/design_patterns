interface Car {
    accept(visitor: Visitor): void;
    move(): void;
    sale(): void;
}

class BMW implements Car {
    accept(visitor: Visitor): void {
        visitor.visitBMW(this);
    }
    move(): void {
        console.log('BMW is moving');
    }
    sale(): void {
        console.log('BMW is on sale');
    }
}

class Benz implements Car {
    accept(visitor: Visitor): void {
        visitor.visitBenz(this);
    }
    move(): void {
        console.log('Benz is moving');
    }
    sale(): void {
        console.log('Benz is on sale');
    }
}

class Audi implements Car {
    accept(visitor: Visitor): void {
        visitor.visitAudi(this);
    }
    move(): void {
        console.log('Audi is moving');
    }
    sale(): void {
        console.log('Audi is on sale');
    }
}

interface Visitor {
    visitBMW(car: BMW): void;
    visitBenz(car: Benz): void;
    visitAudi(car: Audi): void;
}

class CarVisitor implements Visitor {
    visitBMW(car: BMW): void {
        car.move();
        car.sale();
    }
    visitBenz(car: Benz): void {
        car.move();
        car.sale();
    }
    visitAudi(car: Audi): void {
        car.move();
        car.sale();
    }
}

const carVisitor = new CarVisitor();
const elements = [new BMW(), new Benz(), new Audi()];


elements.forEach(element => {
    element.accept(carVisitor);
});