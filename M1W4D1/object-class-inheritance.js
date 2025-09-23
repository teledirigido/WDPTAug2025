class Car {
  
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`🚗 Car Info: ${this.brand} ${this.model}.`)
  }

}

class ElectricCar extends Car {
  
  constructor(brand, model, batteryKwh) {
    super(brand,model); // This calls the parent constructor method()
    this.brand = 'aaa';
    this.batteryKwh = batteryKwh; // This are additional class properties from this ElectricCar class
  }

  // This method ovverrides the parent method
  displayInfo() {
    console.log(`🚗 Car Info: ${this.brand} ${this.model} - ${this.batteryKwh}.`)
  }

  displayBatteryKwh() {
    console.log(this.batteryKwh);
  }

}

const car1 = new Car('Toyota', 'Yaris');
car1.displayInfo();
// car1.displayBatteryKwh();

const car2 = new ElectricCar('Tesla', 'Model X', 1000);
car2.displayInfo();
car2.displayBatteryKwh();