const students = [
  {
    name: 'juan',
    email: false
  },
  {
    name: 'tanja',
    email: 'tanja@ironhack.com'
  },
  {
    name: 'ricardo',
    email: 'ricardo@ironhack.com'
  },
  {
    name: 'amr',
    email: 'amr@ironhack.com'
  },
  {
    name: 'tom',
    email: false
  }
];

// students[0]
// students[1]
// students[3]

for ( let i of students) {
  if(i.email) {
    console.log(`${i.name} - ${i.email}`)
  }

}