interface State {
    handle(context: Context): void;
}

class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    public setState(state: State) {
        this.state = state;
    }

    public getState(): State {
        return this.state;
    }
}

class ConcreteStateA implements State {
    public handle(context: Context): void {
        console.log("`handle` method of ConcreteStateA is being called!");
        context.setState(new ConcreteStateB());
    }
}

class ConcreteStateB implements State {
    public handle(context: Context): void {
        console.log("`handle` method of ConcreteStateB is being called!");
        context.setState(new ConcreteStateA());
    }
}

export function run() {
    const context: Context = new Context(new ConcreteStateA());
    context.getState().handle(context);
    context.getState().handle(context);
    context.getState().handle(context);
    context.getState().handle(context);
    const context2: Context = new Context(new ConcreteStateB());
    context2.getState().handle(context2);
    context2.getState().handle(context2);
    context2.getState().handle(context2);
}

run();