interface IHome {
    createWalls: (number: number) => void;
    createDoors: (number: number) => void;
    createWindows: (number: number) => void;
    createArcitectureHome:() => void;
    createRepair: (number: number) => void;
}

class House {
    windows: number;
    doors: number;
    walls: number;
    wallsMaterial: string;
    arcitectureHome?: boolean;
    costRepair: number;
} 
class HouseWoodenBuilder implements IHome {
    private house: House;

    constructor() {
        this.resetHouse();
    }

    resetHouse(): void {
        this.house = new House();
    }

    createWalls(number: number): void {
        this.house.walls = number;
        this.house.wallsMaterial = 'tree';
    }

    createArcitectureHome(): void {
        this.house.arcitectureHome = true;
    };

    createDoors(number: number): void {
        this.house.doors = number;
    }

    createWindows(number: number): void {
        this.house.windows = number;
    }

    createRepair(number: number): void {
        this.house.costRepair = number;
    };

    getHouse() {
        const result = this.house;
        console.log('created house', JSON.stringify(this.house));
        this.resetHouse();
        return result;
    }
}

class HouseStoneBuilder implements IHome {
    private house: House;

    constructor() {
        this.resetHouse();
    }

    resetHouse(): void {
        this.house = new House();
    }

    createWalls(number: number): void {
        this.house.walls = number;
        this.house.wallsMaterial = 'stone';
    }

    createArcitectureHome(): void {
        this.house.arcitectureHome = true;
    };

    createDoors(number: number): void {
        this.house.doors = number;
    }

    createWindows(number: number): void {
        this.house.windows = number;
    }

    createRepair(number: number): void {
        this.house.costRepair = number;
    };

    getHouse() {
        const result = this.house;
        console.log('created house', JSON.stringify(this.house));
        this.resetHouse();
        return result;
    }
}
 
class Director {
    private builder: IHome;

    setBuilder(builder: IHome): void {
        this.builder = builder;
    }

    createSmallHouse() {
        this.builder.createArcitectureHome();
        this.builder.createWalls(7);
        this.builder.createDoors(10);
        this.builder.createRepair(10000);
    }

    createExpensiveHouse() {
        this.builder.createArcitectureHome();
        this.builder.createWalls(15);
        this.builder.createDoors(20);
        this.builder.createWindows(10);
        this.builder.createRepair(25000);
    }
}

const director = new Director();
const builderWood = new HouseWoodenBuilder();
const bilderStone = new HouseStoneBuilder();
director.setBuilder(builderWood);

console.log('Create small, low cost stone house');

director.createSmallHouse();
builderWood.getHouse();

console.log('Create big, expensive stone house without director');

bilderStone.createArcitectureHome();
bilderStone.createWalls(15);
bilderStone.createDoors(20);
bilderStone.createWindows(10);
bilderStone.createRepair(25000);

bilderStone.getHouse();