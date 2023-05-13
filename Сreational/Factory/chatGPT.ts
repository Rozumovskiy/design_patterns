interface Vehicle {
    count_wheels: number;
    count_doors: number;
    start(): void;
    end(): void;
  }
  
  class Car implements Vehicle {
    count_wheels: number;
    count_doors: number;
  
    constructor() {
      this.count_wheels = 4;
      this.count_doors = 4;
    }
  
    start(): void {
      console.log("Starting the car...");
    }
  
    end(): void {
      console.log("Stopping the car...");
    }
  }
  
  class Bicycle implements Vehicle {
    count_wheels: number;
    count_doors: number;
  
    constructor() {
      this.count_wheels = 2;
      this.count_doors = 0;
    }
  
    start(): void {
      console.log("Starting the bicycle...");
    }
  
    end(): void {
      console.log("Stopping the bicycle...");
    }
  }
  
  // Factory class
  class VehicleFactory {
    createVehicle(type: string): Vehicle | null {
      if (type === "car") {
        return new Car();
      } else if (type === "bicycle") {
        return new Bicycle();
      }
      return null;
    }
  }
  
  // Usage
  const factory = new VehicleFactory();
  const myCar = factory.createVehicle("car");
  const myBicycle = factory.createVehicle("bicycle");
  
  if (myCar) {
    console.log("Car wheels:", myCar.count_wheels);
    console.log("Car doors:", myCar.count_doors);
    myCar.start();
    myCar.end();
  }
  
  if (myBicycle) {
    console.log("Bicycle wheels:", myBicycle.count_wheels);
    console.log("Bicycle doors:", myBicycle.count_doors);
    myBicycle.start();
    myBicycle.end();
  }
  