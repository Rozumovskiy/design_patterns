class Phone {
    private static instance: Phone;
    private constructor() {}

    static getInstance(): Phone {
        if(!Phone.instance) {
            Phone.instance = new Phone();
        }
        return Phone.instance;
    }

    public call(phone: string) {
        console.log(`Calling to ${phone}`);
        
        return `Calling to ${phone}`
    }    
}

function main() {
    const p1 = Phone.getInstance();
    const p2 = Phone.getInstance();

    if (p1 === p2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

main();
