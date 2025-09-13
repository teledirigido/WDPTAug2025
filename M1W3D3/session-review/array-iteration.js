/**
 * Iteration 4 | Filter Out
 * Declare a function filterOut. The function should take two arguments: 
 * an array of strings (original), and an array of strings to filter out.
 * The function should return a new array that only includes 
 * the strings from the original array that are not present 
 * in the second array. In other words, you should remove 
 * all the strings listed in the second array.
 * 
 * You can use the following array to test your solution:
 * 
 * ["fish", "bird", "fish"]
 */

const original = ["cat", "dog", "fish", "bird", "cat", "fish", "mouse", "dog"];
const toRemove = ["cat", "dog"];

// go over original array and remove the elements given on toRmove
function filterOut(src, filterArray) {
  
  const cleanArray = [];

  for(let i of src) {
    let filter = true; // a flag
    for(let j of filterArray) {
      if (i === j) {
        filter = false // flag changes to false when i and j are the same
      }
    }
    if (filter) { // no coincidence has been found when comparing src & filterArray
      cleanArray.push(i) // so add the element into a clean array
    }
  }

  console.log('clean: ', cleanArray);

}

filterOut(original, toRemove);