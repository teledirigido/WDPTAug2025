/* 

Simulating Microservices

1. Scenario: You're building a university dashboard that pulls data from 3 different microservices/APIs:
2. Student Service API - Returns basic student info
3. Course Service API - Returns course details (maintained by academic dept)
4. LMS API (Learning Management System) - Returns assignments, grades, materials

*/


// Takes a student ID and a callback function
// Simulates an async operation (like an API call) with setTimeout
// When data is ready, executes the callback function passing the student object to it
function getStudentById(id, callback, onError) {
  setTimeout(() => {
    const student = students.find(s => s.id === id);
    if (student) {
      typeof callback === 'function' && callback(student);
    } else {
      typeof onError === 'function' && onError('Student NOT FOUND');
    }
  }, 300);
}

// Takes a course ID and a callback function
// Simulates an async operation (like an API call) with setTimeout
// When data is ready, executes the callback function passing the course object to it
function getCourseById(id, callback) {
  setTimeout(() => {
    const course = courses.find(c => c.id === id);
    typeof callback === 'function' && callback(course);
  }, 600);
}

// Takes a teacher ID and a callback function
// Simulates an async operation (like an API call) with setTimeout
// When data is ready, executes the callback function passing the teacher object to it
function getTeacherById(id, callback) {
  setTimeout(() => {
    const teacher = teachers.find(t => t.id === id);
    typeof callback === 'function' && callback(teacher);
  }, 300);
}

function getAssignmentsByCourseId(courseId, callback) {
  setTimeout(() => {
    const courseAssignments = assignments.filter(a => a.courseId === courseId);
    callback(courseAssignments);
  }, 1800);
}