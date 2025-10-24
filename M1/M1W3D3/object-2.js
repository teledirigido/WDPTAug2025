const student = {
  firstName: "Bob",
  lastName: "Dylan"
}

const student2 = {...student};

student.age = 45;
student.lastName = 'Smith';
student2.age = 99;
student.firstName = "Robert";

console.log('Student: ', student);
console.log('Student2: ', student2);