
const lotteryNumbers = [1,3,7,13,32,41];

// Reduce # case 1, get sum of number
const total = lotteryNumbers.reduce( (acc, n, index) => {

  // console.log(`iteration ${index} - accumulator: ${acc}, currentValue - ${acc} + ${n}: ${n}`);
  return acc + n;
}, 0);

// console.log(total);

const employees = [
  { name: "Alice Johnson", email: "alice@company.com", shiftsCompleted: 12 },
  { name: "Bob Smith", email: "bob@company.com", shiftsCompleted: 8 },
  { name: "Carol Davis", email: "carol@company.com", shiftsCompleted: 15 },
  { name: "David Wilson", email: "david@company.com", shiftsCompleted: 10 },
  { name: "Emma Brown", email: "emma@company.com", shiftsCompleted: 7 }
];

// Calculate all shifts done by employees
const totalShifts = employees.reduce( (accumulator, employee) => {
  console.log(accumulator);
  return accumulator + employee.shiftsCompleted;
}, 0)

console.log(totalShifts);