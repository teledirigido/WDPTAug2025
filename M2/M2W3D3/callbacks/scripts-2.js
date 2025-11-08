// Get the student NAME and the course NAME
// : "Student [name] is enrolled in [course name]"

function displayStudentAndCourse() {

  let studentName;

  getStudentById(10)
    .then( student => {
      // console.log(student)
      studentName = student.name;
      return getCourseById(student.courseId)
    })
    .then( course => {
      console.log(studentName)
      console.log(`Student ${studentName} is enrolled in ${course.name}`)
    })

}

// displayStudentAndCourse();

// Student [name] is taking [course name] taught by [teacher name]"
function displayStudentCourseAndTeacher(studentId) {
  let studentName;
  let courseName;
  getStudentById(studentId)
    .then( s => {
      studentName = s.name;
      return getCourseById(s.courseId)
    })
    .then( c => {
      courseName = c.name;
      return getTeacherById(c.teacherId)
    })
    .then( t => console.log(`Student ${studentName} is taking ${courseName} taught by ${t.name}`))
    .catch( (error) => {
      alert(`Error message: ${error}`)
      console.log(`Error message: ${error}`) 
    })
}

// displayStudentCourseAndTeacher(2000);


async function displayStudentAndCourseAsync() {
  try {
    const student = await getStudentById(10);
    const course = await getCourseById(student.courseId);
    console.log(`Student ${student.name} is enrolled in ${course.name}`)
  } catch (error) {
    console.log(error);
  }
}

displayStudentAndCourseAsync();
