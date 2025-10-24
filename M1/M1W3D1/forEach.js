const list = ['a', 1.002929, false, 3, [], 'foo', 'bar', 1000];
const numbers = [];

// forEach
list.forEach((item) => {
  console.log(typeof item)
  /** 
   * item is going to take the value of each element on the array
   * so I need to check if item is a number 
   * if is number, then add it on numbers array
  */
  if (typeof item === 'number') {
    numbers.push(item)
  }
})

console.log(numbers)
