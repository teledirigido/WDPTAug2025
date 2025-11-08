/** 
 * const students = [
  { id: 1, name: "Alice", courseId: 1 },
  { id: 2, name: "Bob", courseId: 2 },
  { id: 3, name: "Charlie", courseId: 3 }
];

Display student (Name) and the course (Name)

*/

function displayStudentAndCourse() {
  const onResponse = (student) => {
    // here I know student data
    getCourseById(student.courseId, (course) => {
      console.log(course);
      // "Student [name] is enrolled in [course name]"
      console.log(`Student ${student.name} is enrolled in ${course.name}`)
    });
  }
  getStudentById(10, onResponse, (msg) => {
    console.log(msg)
  });
}

displayStudentAndCourse();

function displayStudentCourseAndTeacher() {
  // Output: "Student [name] is taking [course name] taught by [teacher name]"
  getStudentById(3, student => {
    getCourseById(student.courseId, course => {
      // console.log(course)
      getTeacherById(course.teacherId, teacher => {
        // console.log(teacher)
        getAssignmentsByCourseId(course.id, assignments => {
          console.log(`Student ${student.name} is taking ${course.name} taught by ${teacher.name}`)
          assignments.forEach(i => console.log(i.title))

        })
      })
    })
  })
}

// displayStudentCourseAndTeacher();

