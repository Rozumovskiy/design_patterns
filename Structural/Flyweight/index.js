var CityFlyweight = /** @class */ (function () {
    function CityFlyweight(name, country) {
        this.name = name;
        this.country = country;
    }
    CityFlyweight.prototype.printInfoAboutCity = function (square, population) {
        console.log("City ".concat(this.name, " has population ").concat(population, " and square ").concat(square, " km^2. It is located in ").concat(this.country, "."));
    };
    return CityFlyweight;
}());
var CityFlyweightFactory = /** @class */ (function () {
    function CityFlyweightFactory() {
        this.cities = {};
    }
    CityFlyweightFactory.prototype.getCity = function (name, country) {
        var key = "".concat(name, "_").concat(country);
        if (!this.cities[key]) {
            this.cities[key] = new CityFlyweight(name, country);
        }
        return this.cities[key];
    };
    CityFlyweightFactory.prototype.getCitiesCount = function () {
        return Object.keys(this.cities).length;
    };
    return CityFlyweightFactory;
}());
var addCity = function (factory, name, country, square, population) {
    var city = factory.getCity(name, country);
    city.printInfoAboutCity(square, population);
};
var factory = new CityFlyweightFactory();
addCity(factory, 'Kyiv', 'Ukraine', 847, 2884000);
addCity(factory, 'Lviv', 'Ukraine', 182, 721301);
addCity(factory, 'New York', 'USA', 1214, 8398748);
addCity(factory, 'Los Angeles', 'USA', 1302, 3990456);
addCity(factory, 'London', 'UK', 1572, 8908081);
