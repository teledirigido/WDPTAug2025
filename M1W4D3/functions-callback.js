/** 
 * Functions can take paremeters
 * parameters can be:
 * integers
 * arrays
 * objects
 * variables
 * NEW: functions 
 * */ 

function myFirstCallback(par1, par2) {
  // do something
  return {
    user: 'admin',
    email: `${par1}@${par2}.com`,
    logged: true
  }
}

function sum(a, b, fn) {
  
  console.log(a + b); // instruction #1

  const myVariable = fn(a,b);
  console.log(myVariable);
}

// ----------|
//           .
sum(10,5, myFirstCallback);



// function anotherCallback() {
//   // Do something ... bla bla bla
//   return 100;
// }

// function myFn() {
//   console.log('Hello world');
// }
