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
var Home = /** @class */ (function () {
    function Home() {
    }
    Home.prototype.templateMethod = function () {
        this.createDoor();
        this.createWindow();
        this.createRoof();
    };
    Home.prototype.createDoor = function () {
        console.log('Create door');
    };
    Home.prototype.createWindow = function () {
        console.log('Create window');
    };
    Home.prototype.createRoof = function () {
        console.log('Create roof');
    };
    return Home;
}());
var WoodenHouse = /** @class */ (function (_super) {
    __extends(WoodenHouse, _super);
    function WoodenHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WoodenHouse.prototype.createDoor = function () {
        console.log('Create wooden door');
    };
    WoodenHouse.prototype.createWindow = function () {
        console.log('Create wooden window');
    };
    WoodenHouse.prototype.createRoof = function () {
        console.log('Create wooden roof');
    };
    return WoodenHouse;
}(Home));
var BrickHouse = /** @class */ (function (_super) {
    __extends(BrickHouse, _super);
    function BrickHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrickHouse.prototype.createDoor = function () {
        console.log('Create brick door');
    };
    BrickHouse.prototype.createWindow = function () {
        console.log('Create brick window');
    };
    BrickHouse.prototype.createRoof = function () {
        console.log('Create brick roof');
    };
    return BrickHouse;
}(Home));
var woodenHouse = new WoodenHouse();
woodenHouse.templateMethod();
var brickHouse = new BrickHouse();
brickHouse.templateMethod();
