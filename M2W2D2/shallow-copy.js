const arr = [1,2,3,4];
const multiArr = [1,2,3,[4,5]];


// This are all the same:
// const arr2 = arr.slice();
// const arr2 = Array.from(arr);
const arr2 = [...arr];
arr2.push(10,20,30)

// Checking multi dimmensional arrays
// const multiArr2 = [...multiArr];
// Deep copy
const multiArr2 = JSON.parse(JSON.stringify(multiArr));
// const multiArr2 = structuredClone(multiArr); // Available from Node 17+

// multiArr2[3].push('aa')
console.log(multiArr)
console.log(multiArr2)
