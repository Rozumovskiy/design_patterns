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
    arcitectureHome?: boolean;
    costRepair: number;
} 
class HouseBuilder implements IHome {
    private house: House;

    constructor() {
        this.resetHouse();
    }

    resetHouse(): void {
        this.house = new House();
    }

    createWalls(number: number): void {
        this.house.walls = number;
    }

    createArcitectureHome(): void {
        console.log('this.houseWall', this.house);
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
const builder = new HouseBuilder();
director.setBuilder(builder);

console.log('Create small, low cost house');

director.createSmallHouse();
builder.getHouse();

console.log('Create big, expensive house');

director.createExpensiveHouse();
builder.getHouse();