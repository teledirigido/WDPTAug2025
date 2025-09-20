const employees = [
  { name: "Alice", department: "Engineering" },
  { name: "Bob", department: "Sales" },
  { name: "Carol", department: "Engineering" },
  { name: "David", department: "Marketing" }
];

const groupedEmployees = employees.reduce( (groups, employee) => {
  // console.log(employee);
  const dept = employee.department;
  if ( !groups[dept] ) {
    groups[dept] = [];
  }
  groups[dept].push(employee);
  // return groups;
}, {});

console.log(groupedEmployees);