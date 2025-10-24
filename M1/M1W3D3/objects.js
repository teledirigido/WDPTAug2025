let myCar = {
  make: 'Honda',
  model: 'Accord',
  year: 1998,
  'a string with spaces': true
};

// console.log(myCar['year']) // myCar.year
// console.log(myCar['a string with spaces'])

// check if <property> is in object
myCar.year = 2000;
myCar.make = 'Subaru';
myCar.model = 'Legacy';

// delete
delete myCar['a string with spaces'];
delete myCar.year

// console.log(myCar);
// console.log(Object.keys(myCar));
// console.log(Object.values(myCar));

for (let i in myCar) {
  console.log(i)
}