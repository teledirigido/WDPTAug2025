const numbers = [1, 2, 3, 4, 5, 6];

const results = numbers.filter( n => {
  return n < 2;
});

// console.log(results);

const people = [
  { name: 'Candice', age: 25, hasEmail: true },
  { name: 'Tammy', age: 30, hasEmail: false },
  { name: 'Allen', age: 20, hasEmail: true },
  { name: 'Nettie', age: 21, hasEmail: true },
  { name: 'Stuart', age: 17, hasEmail: false },
  { name: 'Bill', age: 19, hasEmail: false }
];

const adults = people.filter( p => {
  return !p.hasEmail && p.age < 18;
});
console.log(adults);