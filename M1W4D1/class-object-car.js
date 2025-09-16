/**
 * class is the keyword to define a new class
 * Car: the name of the class, usually first uppercase and lowercase the rest (capital)
 */
class Car {

  /**
   * Static property
   */
  static numberOfCars = 0;

  constructor(brand, model, owner, consumption) {
    /**
     * Defining properties of this class
     */
    this.engineStart = false;
    this.country = 'Spain';
    this.brand = brand;
    this.model = model;
    this.owner = owner;
    this.consumption = consumption;
    this.tank = 100;
    Car.numberOfCars++;
  }

  static myStaticMethod() {
    console.log('Foo bar 123');
  }
  
  startEngine() {
    if (!this.engineStart) {
      this.engineStart = true;
      console.log(`🚗💨 ${this.brand} ${this.model} Engine Started`)
    }
  }

  goAround() {

    if(!this.engineStart) {
      console.log('Engine not started');
      return;
    }

    if (this.tank) {
      this.tank -= this.consumption;
      console.log(`Tank is on ${this.tank}`)
    } else {
      console.log('No gasoline, please refill');
    }
  }

  refill() {
    this.tank = 100;
    console.log('Car has been refilled');
  }

  stopEngine() {
    console.log(`🚗 ${this.brand} ${this.model} Engine Stops 😴`);
  }

  static getNumberOfCars() {
    return Car.numberOfCars;
  }

}

const myCar = new Car('Toyota', 'Hilux', 'Bob', 17);
const myCar2 = new Car('Subaru', 'Legacy', 'Alice', 50);
const myCar3 = new Car('Honda', 'Accord', 'Peter', 10);

console.log(Car.getNumberOfCars());

myCar.startEngine();
// console.log(myCar.engineStart);
// myCar2.startEngine();
// myCar2.stopEngine();
myCar.goAround();
myCar.goAround();
myCar.goAround();
myCar.goAround();
myCar.goAround();
myCar.refill();
myCar.goAround();