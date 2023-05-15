interface IFurnitureFactory {
    createChair: () => void,
    createSofa: () => void,
    createCoffeTable: () => void,
}

interface AbstractFactory {
    createChair: () => void,
    type: string,
}

class ModernStyleFactory implements IFurnitureFactory {
    constructor () {
        this.createChair = this.createChair;
        this.createSofa = this.createSofa;
        this.createCoffeTable = this.createCoffeTable;
    }

    createChair = () => {
        console.log(`Create chair. Style: Modern`);
    };

    createCoffeTable = () => {
        console.log(`Create coffe table. Style: Modern`);
    };

    createSofa = () => {
        console.log(`Create sofa. Style: Modern`);
    };
}

class ClassicStyleFactory implements IFurnitureFactory {
    constructor () {
        this.createChair = this.createChair;
        this.createSofa = this.createSofa;
        this.createCoffeTable = this.createCoffeTable;
    }

    createChair = () => {
        console.log(`Create chair. Style: Classic`);
    };

    createCoffeTable = () => {
        console.log(`Create coffe table. Style: Classic`);
    };

    createSofa = () => {
        console.log(`Create sofa. Style: Classic`);
    };
}

class AbstractFactory implements AbstractFactory{
    constructor(type: string) {
        this.type = type;
        this.createChair = this.createChair;
        this.createSofa = this.createSofa;
        this.createCoffeTable = this.createCoffeTable;
    }

    createChair = () => {
        if(this.type === 'Modern') {
            const m = new ModernStyleFactory();
            return m.createChair();
        } else {
            const c = new ClassicStyleFactory();
            return c.createChair();
        }
    }

    createSofa = () => {
        if(this.type === 'Modern') {
            const m = new ModernStyleFactory();
            return m.createSofa();
        } else {
            const c = new ClassicStyleFactory();
            return c.createSofa();
        }
    }

    createCoffeTable = () => {
        if(this.type === 'Modern') {
            const m = new ModernStyleFactory();
            return m.createCoffeTable();
        } else {
            const c = new ClassicStyleFactory();
            return c.createCoffeTable();
        }
    }
}

const a = new AbstractFactory('Modern');
const b = new AbstractFactory('Classical');
a.createChair();
b.createChair();
a.createSofa();
b.createSofa();
a.createCoffeTable();
b.createCoffeTable();


