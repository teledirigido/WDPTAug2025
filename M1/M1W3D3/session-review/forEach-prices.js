const prices = [10, 25, 15, 30];
prices.forEach( (price, index, originalArray) => {
  console.log('max price:', Math.max(...originalArray));
})