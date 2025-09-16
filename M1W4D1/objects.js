/*
const insect = {
  // <property>: <value>
  name: 'Honey Bee',
  hobbies: ['honey', 'dancing', 'flowers'],
  order: 'Hymenoptera', 
  sayHi: function() {
    console.log('Hello 🐝');
  }
}

console.log(insect.name);
insect.sayHi();

const insect2 = {
  // <property>: <value>
  name: 'German Wasp',
  hobbies: ['naps', 'flowers', 'annoying bees'],
  order: 'Hymenoptera', 
  sayHi: function() {
    console.log('Hello 🐝');
  }
}
*/

class Insect {
  
  constructor(name, hobbies, order) {
    this.name = name;
    this.hobbies = hobbies;
    this.order = order;
  }

  static myStaticMethod() {
    console.log(this.order)
  }

  sayHi() {
    console.log(this);
    console.log(`Hello I am a ${this.name}`);
  }

  displayHobbies() {
    console.log(`My favorite hobbies are ${this.hobbies.join(', ')}`);
  }

  showHobby(index) {
    console.log(`My hobby number ${index}: ${this.hobbies[index]}`)
  }

}

const insect1 = new Insect('Honey Bee', ['naps', 'flowers', 'honey'], 'Hymenoptera');
const insect2 = new Insect('Red Ant', ['work', 'more work', 'bite'], 'Hymenoptera');
insect1.sayHi();

Insect.myStaticMethod();

// insect1.displayHobbies();
// insect1.showHobby(2);

// insect2.sayHi();

