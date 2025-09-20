const employees = [
  { name: "Alice", department: "Engineering" },
  { name: "Bob", department: "Sales" },
  { name: "Carol", department: "Engineering" },
  { name: "David", department: "Marketing" },
  { name: "Foo Bar", department: "Marketing" }
];

// Group people by department
const groupBy = employees.reduce( (accumulator, employee) => {
  // employee.department
  const department = employee.department;
  if (!accumulator[department]) {
    accumulator[department] = [];
  }
  accumulator[department].push(employee);
  return accumulator;
}, {});

console.log(groupBy);