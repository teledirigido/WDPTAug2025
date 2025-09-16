class Car {

  #owner

  constructor(brand, model, owner) {
    this.brand = brand;
    this.model = model;
    this.#owner = owner;
  }

  getCarInfo() {
    // const serialNumber = 
    console.log(`Car: ${this.brand} ${this.model} - ${this.#getSerialNumber()} | Owned by: ${this.#owner}`)
  }

  displayOwner() {
    console.log(this.#owner);
  }

  updateOwner(newOwner) {
    if (this.isRegistered(newOwner)) {
      this.#owner = newOwner;
    } else {
      console.log('error')
    }
  }

  isRegistered(newOwner) {
    // return true is user is on database
    // return false is not
    return true;
  }

  #getSerialNumber() {
    return Math.random().toString(10).substring(2,10).toUpperCase();
  }  

}

const car1 = new Car('Suzuki', 'Swift', 'Angela');
car1.model = 'Swift Sport 1.2';
car1.updateOwner('Tanja');
car1.updateOwner('Alice');
car1.owner = 'Miguel';
car1.owner = 'Rob';
car1.owner = 'Foo';
// car1.getCarInfo();
car1.displayOwner();