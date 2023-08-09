class CityFlyweight {
    name: string;
    country: string;
    
    constructor(name: string, country: string) {
        this.name = name;
        this.country = country;
    }

    printInfoAboutCity(square: number, population: number) {
        console.log(`City ${this.name} has population ${population} and square ${square} km^2. It is located in ${this.country}.`);
    }
}

class CityFlyweightFactory {
    private cities: {[key: string]: CityFlyweight} = {};

    getCity(name: string, country: string) {
        const key = `${name}_${country}`;

        if (!this.cities[key]) {
            this.cities[key] = new CityFlyweight(name, country);
        }

        return this.cities[key];
    }

    getCitiesCount() {
        return Object.keys(this.cities).length;
    }
}


const addCity = (factory: CityFlyweightFactory, name: string, country: string, square: number, population: number) => {
    const city = factory.getCity(name, country);
    city.printInfoAboutCity(square, population);
}

const factory = new CityFlyweightFactory();
addCity(factory, 'Kyiv', 'Ukraine', 847, 2884000);
addCity(factory, 'Lviv', 'Ukraine', 182, 721301);
addCity(factory, 'New York', 'USA', 1214, 8398748);
addCity(factory, 'Los Angeles', 'USA', 1302, 3990456);
addCity(factory, 'London', 'UK', 1572, 8908081);
