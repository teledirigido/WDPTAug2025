const programingSteps = [
  "Open the file",
  "Read the instructions",
  "Open the IDE",
  "Code Code Code",
  "Take a rest"
];



setTimeout( () => {
  console.log('Delayed:', programingSteps[0]);  
}, 10)

programingSteps.forEach( item => {
  console.log(item);
})

const a = "a".repeat(10000000);

console.log('Do something');