const reptiles = ['snake', 'lizard', 'alligator'];

/**  Old version
const reptilesCopy = reptiles.slice();
reptilesCopy.push('dragon')
reptilesCopy.push('cobra');
*/

// New Version
const reptilesCopy = [...reptiles, 'dragon', 'cobra'];


console.log(reptiles);
console.log(reptilesCopy);