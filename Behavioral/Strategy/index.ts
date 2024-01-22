interface Strategy {
    execute(a: number, b: number): number;
}

class Add implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

class Subtract implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}

class Multiply implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}

class Divide implements Strategy {
    execute(a: number, b: number): number {
        return a / b;
    }
}

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

const context = new Context(new Add());
console.log(context.executeStrategy(1, 2));
const context2 = new Context(new Subtract());
console.log(context2.executeStrategy(1, 2));
const context3 = new Context(new Multiply());
console.log(context3.executeStrategy(1, 2));