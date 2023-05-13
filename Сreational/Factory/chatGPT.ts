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
  
  interface VehicleFactory {
    createVehicle(): Vehicle;
  }
  
  class CarFactory implements VehicleFactory {
    createVehicle(): Vehicle {
      return new Car();
    }
  }
  
  class BicycleFactory implements VehicleFactory {
    createVehicle(): Vehicle {
      return new Bicycle();
    }
  }
  
  // Usage
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  
  const myCar = carFactory.createVehicle();
  const myBicycle = bicycleFactory.createVehicle();
  
  console.log("Car wheels:", myCar.count_wheels);
  console.log("Car doors:", myCar.count_doors);
  myCar.start();
  myCar.end();
  
  console.log("Bicycle wheels:", myBicycle.count_wheels);
  console.log("Bicycle doors:", myBicycle.count_doors);
  myBicycle.start();
  myBicycle.end();
  