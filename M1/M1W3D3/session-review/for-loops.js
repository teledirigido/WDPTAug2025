const original = ["cat", "dog", "fish", "bird", "cat", "fish", "mouse", "dog", { 'a': 'b' }];

console.log('OUTPUT FOR FOR...IN');
console.log('----------------------');
for( let i in original ) { // go through each element index in the array 
  console.log(i)
}
console.log('----------------------');
console.log('OUTPUT FOR FOR...OF');
console.log('----------------------');
for( let i of original ) { // go through each element in the array
  console.log(i)
}

console.log('----------------------');
console.log('OUTPUT FOR FOR');
console.log('----------------------');
// create an index equal to zero, 
// stop on array.length, and increase array 
// on one on each iteration

for(let i = 0 ; i < original.length ; i++ ) { 
  console.log(original[i]);
}

console.log('----------------------');
console.log('OUTPUT FOR FOR EACH');
console.log('----------------------');
original.forEach( (elem, index) => {
  console.log(index, elem, original)
})
