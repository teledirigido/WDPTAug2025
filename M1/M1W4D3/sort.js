const numbers = [22, 23, 99, 68, 1];

numbers.sort( (a, b) => {
  return a - b;
});

console.log(numbers.reverse());

const words = ['abc','aaa', 'Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];

words.sort( (a,b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  if ( a === 0 ) return 0;
});
// console.log(words)