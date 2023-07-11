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
var Dot = /** @class */ (function () {
    function Dot(x, y) {
        this.x = x;
        this.y = y;
    }
    Dot.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Dot.prototype.draw = function () {
        console.log("Draw a dot in x:".concat(this.x, " and y:").concat(this.y, " coordinate."));
    };
    return Dot;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, radius) {
        var _this = _super.call(this, x, y) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.draw = function () {
        console.log("Draw a circle in x:".concat(this.x, " and y:").concat(this.y, " coordinate and radius ").concat(this.radius, "."));
    };
    return Circle;
}(Dot));
var CompoundGraphic = /** @class */ (function () {
    function CompoundGraphic() {
        this.children = [];
    }
    CompoundGraphic.prototype.add = function (child) {
        this.children.push(child);
    };
    CompoundGraphic.prototype.remove = function (child) {
        this.children = this.children.filter(function (c) { return c !== child; });
    };
    CompoundGraphic.prototype.move = function (x, y) {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var c = _a[_i];
            c.move(x, y);
        }
    };
    CompoundGraphic.prototype.draw = function () {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var c = _a[_i];
            c.draw();
        }
    };
    return CompoundGraphic;
}());
var ImageDrawler = /** @class */ (function () {
    function ImageDrawler() {
    }
    ImageDrawler.prototype.load = function () {
        this.all = new CompoundGraphic();
        this.all.add(new Dot(1, 2));
        this.all.add(new Circle(5, 3, 10));
    };
    ImageDrawler.prototype.groupSelected = function (components) {
        var group = new CompoundGraphic();
        for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
            var c = components_1[_i];
            group.add(c);
            this.all.remove(c);
        }
        this.all.add(group);
        this.all.draw();
    };
    return ImageDrawler;
}());
var a = new ImageDrawler();
a.load();
a.groupSelected([new Dot(1, 2), new Dot(5, 7), new Dot(10, 20), new Circle(7, 1, 20), new Circle(9, 2, 50), new Circle(15, 23, 10)]);
