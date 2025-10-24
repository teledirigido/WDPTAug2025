function forEachLoop(arr) {
  const uniqueWord = 'unique';
  let found = null;
  
  arr.forEach(item => {
    if (item === uniqueWord && found === null) {
      found = item;
    }
  });
  
  return found || 'Not found';
}

function forLoop(arr) {
  const uniqueWord = 'unique';
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === uniqueWord) {
      return arr[i];
    }
  }
  
  return 'Not found';
}

function generateWorstCase(size) {
  const arr = Array(size).fill('repeated');
  arr[size - 1] = 'unique';
  return arr;
}

function testPerformance(arr, algorithmName, algorithm) {
  console.log(`\n--- Testing ${algorithmName} (Array size: ${arr.length}) ---`);

  const start = performance.now();
  const result = algorithm(arr);
  const end = performance.now();

  const time = (end - start).toFixed(4);
  console.log(`Result: ${result}`);
  console.log(`Time: ${time} ms`);

  return parseFloat(time);
}

function runPerformanceComparison() {
  const sizes = [500000, 9000000];
  const algorithms = [
    ['forEach', forEachLoop],
    ['for', forLoop],
  ];

  console.log('='.repeat(60));
  console.log('PERFORMANCE COMPARISON: Finding Unique Word (Worst Case)');
  console.log('='.repeat(60));

  sizes.forEach(size => {
    console.log(`\n🔍 TESTING WITH ARRAY SIZE: ${size}`);
    console.log('-'.repeat(50));

    const testArray = generateWorstCase(size);

    algorithms.forEach(([name, algorithm]) => {
      testPerformance(testArray, name, algorithm);
    });
  });
}

runPerformanceComparison();

