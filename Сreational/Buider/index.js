var House = /** @class */ (function () {
    function House() {
    }
    return House;
}());
var HouseWoodenBuilder = /** @class */ (function () {
    function HouseWoodenBuilder() {
        this.resetHouse();
    }
    HouseWoodenBuilder.prototype.resetHouse = function () {
        this.house = new House();
    };
    HouseWoodenBuilder.prototype.createWalls = function (number) {
        this.house.walls = number;
        this.house.wallsMaterial = 'tree';
    };
    HouseWoodenBuilder.prototype.createArcitectureHome = function () {
        this.house.arcitectureHome = true;
    };
    ;
    HouseWoodenBuilder.prototype.createDoors = function (number) {
        this.house.doors = number;
    };
    HouseWoodenBuilder.prototype.createWindows = function (number) {
        this.house.windows = number;
    };
    HouseWoodenBuilder.prototype.createRepair = function (number) {
        this.house.costRepair = number;
    };
    ;
    HouseWoodenBuilder.prototype.getHouse = function () {
        var result = this.house;
        console.log('created house', JSON.stringify(this.house));
        this.resetHouse();
        return result;
    };
    return HouseWoodenBuilder;
}());
var HouseStoneBuilder = /** @class */ (function () {
    function HouseStoneBuilder() {
        this.resetHouse();
    }
    HouseStoneBuilder.prototype.resetHouse = function () {
        this.house = new House();
    };
    HouseStoneBuilder.prototype.createWalls = function (number) {
        this.house.walls = number;
        this.house.wallsMaterial = 'stone';
    };
    HouseStoneBuilder.prototype.createArcitectureHome = function () {
        this.house.arcitectureHome = true;
    };
    ;
    HouseStoneBuilder.prototype.createDoors = function (number) {
        this.house.doors = number;
    };
    HouseStoneBuilder.prototype.createWindows = function (number) {
        this.house.windows = number;
    };
    HouseStoneBuilder.prototype.createRepair = function (number) {
        this.house.costRepair = number;
    };
    ;
    HouseStoneBuilder.prototype.getHouse = function () {
        var result = this.house;
        console.log('created house', JSON.stringify(this.house));
        this.resetHouse();
        return result;
    };
    return HouseStoneBuilder;
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
var builderWood = new HouseWoodenBuilder();
var bilderStone = new HouseStoneBuilder();
director.setBuilder(builderWood);
console.log('Create small, low cost stone house');
director.createSmallHouse();
builderWood.getHouse();
director.setBuilder(bilderStone);
director.createExpensiveHouse();
bilderStone.getHouse();
// console.log('Create big, expensive stone house without director');
// bilderStone.createArcitectureHome();
// bilderStone.createWalls(15);
// bilderStone.createDoors(20);
// bilderStone.createWindows(10);
// bilderStone.createRepair(25000);
// bilderStone.getHouse();
