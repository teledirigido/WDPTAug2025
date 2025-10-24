const calculate = function(a, b, callback) {

  const result = callback(a,b);
  if (result > 10) {
    
  }

  console.log(result);

}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function power(a, b) {
    return Math.pow(a, b);
}

calculate(5, 3, add); // 5 + 3 = 8
calculate(4, 7, multiply); // 4 × 7 = 28
calculate(2, 4, power); // 2^4 = 16