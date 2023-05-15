var ModernStyleFactory = /** @class */ (function () {
    function ModernStyleFactory() {
        this.createChair = function () {
            console.log("Create chair. Style: Modern");
        };
        this.createCoffeTable = function () {
            console.log("Create coffe table. Style: Modern");
        };
        this.createSofa = function () {
            console.log("Create sofa. Style: Modern");
        };
        this.createChair = this.createChair;
        this.createSofa = this.createSofa;
        this.createCoffeTable = this.createCoffeTable;
    }
    return ModernStyleFactory;
}());
var ClassicStyleFactory = /** @class */ (function () {
    function ClassicStyleFactory() {
        this.createChair = function () {
            console.log("Create chair. Style: Classic");
        };
        this.createCoffeTable = function () {
            console.log("Create coffe table. Style: Classic");
        };
        this.createSofa = function () {
            console.log("Create sofa. Style: Classic");
        };
        this.createChair = this.createChair;
        this.createSofa = this.createSofa;
        this.createCoffeTable = this.createCoffeTable;
    }
    return ClassicStyleFactory;
}());
var AbstractFactory = /** @class */ (function () {
    function AbstractFactory(type) {
        var _this = this;
        this.createChair = function () {
            if (_this.type === 'Modern') {
                var m = new ModernStyleFactory();
                return m.createChair();
            }
            else {
                var c = new ClassicStyleFactory();
                return c.createChair();
            }
        };
        this.createSofa = function () {
            if (_this.type === 'Modern') {
                var m = new ModernStyleFactory();
                return m.createSofa();
            }
            else {
                var c = new ClassicStyleFactory();
                return c.createSofa();
            }
        };
        this.createCoffeTable = function () {
            if (_this.type === 'Modern') {
                var m = new ModernStyleFactory();
                return m.createCoffeTable();
            }
            else {
                var c = new ClassicStyleFactory();
                return c.createCoffeTable();
            }
        };
        this.type = type;
        this.createChair = this.createChair;
        this.createSofa = this.createSofa;
        this.createCoffeTable = this.createCoffeTable;
    }
    return AbstractFactory;
}());
var a = new AbstractFactory('Modern');
var b = new AbstractFactory('Classical');
a.createChair();
b.createChair();
a.createSofa();
b.createSofa();
a.createCoffeTable();
b.createCoffeTable();
