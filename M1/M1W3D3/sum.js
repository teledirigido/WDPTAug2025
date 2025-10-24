console.log('Sum unit test');

function sum(a,b) {
  if(!a || !b) {
    return false;
  } 
  return a + b;
}

// Specs
console.log( sum(2,3) === 5 )
console.log( sum(10,2) === 12 )
console.log( sum() === false )