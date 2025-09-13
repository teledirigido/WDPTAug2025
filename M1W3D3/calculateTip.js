// Calculate tip based on 10%
function calculateTip(amount) {
  if (typeof amount !== 'number') {
    return undefined;
  }
  return amount / 10;
}

// specs
console.log(calculateTip(100) === 10);
console.log(calculateTip(200) === 20);
console.log(calculateTip('200') === undefined);
console.log(calculateTip([]) === undefined);

