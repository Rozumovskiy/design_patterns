var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clinent = /** @class */ (function () {
    function Clinent() {
        var invoker = new Invoker();
        var receiver = new Receiver();
        var command = new ConcreteCommand(receiver);
        invoker.setCommand(command);
        invoker.executeCommand();
    }
    return Clinent;
}());
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.setCommand = function (command) {
        this.command = command;
    };
    Invoker.prototype.executeCommand = function () {
        this.command.execute();
    };
    return Invoker;
}());
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.action = function () {
        console.log('Receiver action');
    };
    return Receiver;
}());
var Command = /** @class */ (function () {
    function Command(receiver) {
        this.receiver = receiver;
    }
    Command.prototype.execute = function () {
        this.receiver.action();
    };
    return Command;
}());
var ConcreteCommand = /** @class */ (function (_super) {
    __extends(ConcreteCommand, _super);
    function ConcreteCommand(receiver) {
        return _super.call(this, receiver) || this;
    }
    ConcreteCommand.prototype.execute = function () {
        _super.prototype.execute.call(this);
    };
    return ConcreteCommand;
}(Command));
new Clinent();
