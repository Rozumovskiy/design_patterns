var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
    }
    Publisher.prototype.subscribe = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    Publisher.prototype.unsubscribe = function (subscriber) {
        this.subscribers = this.subscribers.filter(function (sub) { return sub !== subscriber; });
    };
    Publisher.prototype.notify = function (data) {
        this.subscribers.forEach(function (sub) { return sub.update(data); });
    };
    return Publisher;
}());
var Subscriber1 = /** @class */ (function () {
    function Subscriber1() {
    }
    Subscriber1.prototype.update = function (data) {
        console.log("Subscriber 1: ".concat(data));
    };
    return Subscriber1;
}());
var Subscriber2 = /** @class */ (function () {
    function Subscriber2() {
    }
    Subscriber2.prototype.update = function (data) {
        console.log("Subscriber 2: ".concat(data));
    };
    return Subscriber2;
}());
var publisher = new Publisher();
var subscriber1 = new Subscriber1();
var subscriber2 = new Subscriber2();
publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);
publisher.notify('Hello World!');
publisher.unsubscribe(subscriber2);
publisher.notify('Hello World2!');
