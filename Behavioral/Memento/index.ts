class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }

    public setState(state: string): void {
        this.state = state;
    }

    public save(): Memento {
        return new Memento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
    }
}

class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}

class CareTaker {
    private mementos: Memento[] = [];

    public add(memento: Memento): void {
        this.mementos.push(memento);
    }

    public get(index: number): Memento {
        return this.mementos[index];
    }
}

const originator: Originator = new Originator('State #1');
const careTaker: CareTaker = new CareTaker();

careTaker.add(originator.save());
originator.setState('State #2');
careTaker.add(originator.save());
originator.setState('State #3');
careTaker.add(originator.save());
originator.setState('State #4');

