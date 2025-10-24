class Insect {
  
  static order = 'Hymenoptera';
  static kingdom = 'Animalia';

  constructor(name, hobbies) {
    this.name = name;
    this.hobbies = hobbies;
  }

  static displayMetaData() {
    console.log({
      order: this.order,
      kingdom: this.kingdom
    });
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }

  displayHobbies() {
    console.log(`${this.name} (${Insect.order}) likes ${this.hobbies.slice(0, -1).join(', ')} and ${this.hobbies[this.hobbies.length - 1]}.`);
  }

}

const insect1 = new Insect('Bee', ['flowers', 'naps', 'honey']);
const insect2 = new Insect('Red Ant', ['work', 'more work', 'toe biting']);

// person1.sayHi();
// person1.displayHobbies();

insect2.sayHi();
insect2.displayHobbies();