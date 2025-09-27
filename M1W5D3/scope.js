let a = 1;
let b = 2;

function inner() {
  a = 4; // reassigned
  let b = 3; // declared in an inner scope

}

inner();


console.log(a);
console.log(b);
