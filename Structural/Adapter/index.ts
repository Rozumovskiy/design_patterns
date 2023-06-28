class SentCVSFormatRequest {
    public sendRequest(): string {
        return 'Send report in csv format.';
    }
}

class ConverToJSON {
    public convertToJSON(): string {
        return 'Sent request using JSON format';
    }
}

class Adapter extends SentCVSFormatRequest {
    private adaptee: ConverToJSON;

    constructor (adaptee: ConverToJSON) {
        super();
        this.adaptee = adaptee;
    }

    public sendRequest(): string {
        return this.adaptee.convertToJSON();
    }
}

const clientCode = (sendCVSFormatRequest: SentCVSFormatRequest) => {
    console.log(sendCVSFormatRequest.sendRequest());
}

const target = new SentCVSFormatRequest();
clientCode(target);

console.log('');

const adaptee = new ConverToJSON();
adaptee.convertToJSON()

const adapter = new Adapter(adaptee);
clientCode(adapter);