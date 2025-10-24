const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
  { name: 'David', grade: 'B' },
  { name: 'Mike', grade: 'C' },
  { name: 'Carlos', grade: 'B' }
];

const byGrade = students.reduce( (acc, current) => {
  return ( acc[current.grade] ??= []).push(current.name) && acc || acc;
}, {});

console.log(byGrade);