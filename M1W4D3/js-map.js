const numbers = [1, 2, 3, 4, 5]; // => [2, 4, 6]

// foreach
const myNumbers2 = [];
numbers.forEach( (n) => {
  myNumbers2.push(n * 2);
});
// console.log(myNumbers2);

// map
// const newArray = numbers.map( n => n + 2);
const newArray = numbers.map( n => {
  return n + 2
});
console.log(newArray);

const foods = ['pizza', 'sandwiches', 'ice cream'];
const uppercaseFoods = foods.map( f => {
  return f.toUpperCase();
})
console.log(uppercaseFoods);