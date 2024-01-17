interface ISubscriber {
    update(data: any): void;
}

class Publisher {
    subscribers: ISubscriber[];

    constructor() {
        this.subscribers = [];
    }
    
    subscribe(subscriber: ISubscriber) {
        this.subscribers.push(subscriber);
    }
    
    unsubscribe(subscriber: ISubscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }
    
    notify(data: any) {
        this.subscribers.forEach(sub => sub.update(data));
    }
}


class Subscriber1 {
    update(data) {
        console.log(`Subscriber 1: ${data}`);
    }
}

class Subscriber2 {
    update(data) {
        console.log(`Subscriber 2: ${data}`);
    }
}

const publisher = new Publisher();
const subscriber1 = new Subscriber1();
const subscriber2 = new Subscriber2();
publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);
publisher.notify('Hello World!');
publisher.unsubscribe(subscriber2);
publisher.notify('Hello World2!');
