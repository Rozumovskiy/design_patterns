var House = /** @class */ (function () {
    function House() {
    }
    return House;
}());
var HouseBuilder = /** @class */ (function () {
    function HouseBuilder() {
        this.resetHouse();
    }
    HouseBuilder.prototype.resetHouse = function () {
        this.house = new House();
    };
    HouseBuilder.prototype.createWalls = function (number) {
        this.house.walls = number;
    };
    HouseBuilder.prototype.createArcitectureHome = function () {
        console.log('this.houseWall', this.house);
        this.house.arcitectureHome = true;
    };
    ;
    HouseBuilder.prototype.createDoors = function (number) {
        this.house.doors = number;
    };
    HouseBuilder.prototype.createWindows = function (number) {
        this.house.windows = number;
    };
    HouseBuilder.prototype.createRepair = function (number) {
        this.house.costRepair = number;
    };
    ;
    HouseBuilder.prototype.getHouse = function () {
        var result = this.house;
        console.log('created house', JSON.stringify(this.house));
        this.resetHouse();
        return result;
    };
    return HouseBuilder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.createSmallHouse = function () {
        this.builder.createArcitectureHome();
        this.builder.createWalls(7);
        this.builder.createDoors(10);
        this.builder.createRepair(10000);
    };
    Director.prototype.createExpensiveHouse = function () {
        this.builder.createArcitectureHome();
        this.builder.createWalls(15);
        this.builder.createDoors(20);
        this.builder.createWindows(10);
        this.builder.createRepair(25000);
    };
    return Director;
}());
var director = new Director();
var builder = new HouseBuilder();
director.setBuilder(builder);
console.log('Create small, low cost house');
director.createSmallHouse();
builder.getHouse();
console.log('Create big, expensive house');
director.createExpensiveHouse();
builder.getHouse();
