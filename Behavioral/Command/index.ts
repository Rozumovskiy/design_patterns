class Clinent {
    constructor() {
        const invoker = new Invoker();
        const receiver = new Receiver();
        const command = new ConcreteCommand(receiver);
        invoker.setCommand(command);
        invoker.executeCommand();
    }
}

class Invoker {
    private command: Command;

    public setCommand(command: Command) {
        this.command = command;
    }

    public executeCommand() {
        this.command.execute();
    }
}

class Receiver {
    public action() {
        console.log('Receiver action');
    }

}

class Command {
    protected receiver: Receiver;

    constructor(receiver: Receiver) {
        this.receiver = receiver;
    }

    public execute() {
        this.receiver.action();
    }
}

class ConcreteCommand extends Command {
    constructor(receiver: Receiver) {
        super(receiver);
    }

    public execute() {
        super.execute();
    }
}

new Clinent();
