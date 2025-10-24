// After installing the "colors" npm package, we need to import it (require it)
// in the file where we are planning to use it
const myColors = require('colors/safe');

console.log(myColors.yellow('hello')); // Outputs yellow text
console.log(myColors.red.underline('i like cake and pies')); // Outputs red underlined text
console.log(myColors.inverse('inverse the color')); // Inverts the color
console.log(myColors.rainbow('OMG Rainbows!')); // Outputs text in colors of a rainbow
console.log(myColors.trap('Run the trap')); // Outputs the text using the trap font
