const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];

// Old way ES5
// const animals = reptiles.concat(mammals);

// ES6
const animals = [...reptiles, ...mammals];

console.log(animals);