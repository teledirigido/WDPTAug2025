  // index   [0,1,2,3,4]
const info = [1,2,3,4,5]
// console.log(info[4])

const mixArrays = ['Javascript', 2, true];
mixArrays.push('CSS');
mixArrays.push('HTML');
mixArrays.push(123);
mixArrays.unshift('Node.JS');
mixArrays.pop();
mixArrays.splice(2, 1, 'React', 'Firefox','Chrome', 'Opera') // start on index 2, remove 3 elements, add "React"
// console.log(mixArrays);

const languages = ['HTML','CSS','Javascript', 'Webpack', 'React'];
/**
 * for ... of
  for(let lang of languages) {
    console.log(lang)
  }
 */

// languages.forEach(function (lang, index, thisArray) {
//   console.log(lang, index)
// });
// console.log(languages.length);
// languages.forEach( (element, index) => console.log(element, index) );

let phrase = "This is long enough for a string to count it words";
let words = phrase.split(" ");
// console.log(words);

const lotteryNumber = [1,5,16,32,64];

// lotteryNumber.forEach( (number) => {
//   console.log(number)
// })

/**
 * Map is a function that can be chained into an array and return a modified array
 */
const myNumbers = lotteryNumber.map( (number) => {
  return number * 2
})

/**
 * With multiply method we can also multiply 
 * an array by two but it takes more line of code
 */
function multiply(arr) {
  let newArr = [];
  for (i of arr) {
    newArr.push(i * 2)
  }
  return newArr;
}
console.log(multiply(lotteryNumber));


/** 
 * 
function multiply(a,b,c,d,e,f) {
  return [a * 2, b * 2, c * 2, e * 2, f];
}
const result = multiply(1,5,16,32,64,70);
console.log(result);
*/




