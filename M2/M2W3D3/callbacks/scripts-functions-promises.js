/*

Simulating Microservices with Promises

Scenario: You're building a university dashboard that pulls data from 3 different microservices/APIs:
1. Student Service API - Returns basic student info
2. Course Service API - Returns course details (maintained by academic dept)
3. LMS API (Learning Management System) - Returns assignments, grades, materials

*/


// Takes a student ID
// Simulates an async operation (like an API call) with setTimeout
// Returns a Promise that resolves with the student object
function getStudentById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = students.find(s => s.id === id);
      if (student) {
        resolve(student);
      } else {
        reject(new Error(`Student with id ${id} not found`));
      }
    }, 300);
  });
}

// Takes a course ID
// Simulates an async operation (like an API call) with setTimeout
// Returns a Promise that resolves with the course object
function getCourseById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const course = courses.find(c => c.id === id);
      if (course) {
        resolve(course);
      } else {
        reject(new Error(`Course with id ${id} not found`));
      }
    }, 600);
  });
}

// Takes a teacher ID
// Simulates an async operation (like an API call) with setTimeout
// Returns a Promise that resolves with the teacher object
function getTeacherById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const teacher = teachers.find(t => t.id === id);
      if (teacher) {
        resolve(teacher);
      } else {
        reject(new Error(`Teacher with id ${id} not found`));
      }
    }, 300);
  });
}

// Takes a course ID
// Simulates an async operation (like an API call) with setTimeout
// Returns a Promise that resolves with an array of assignment objects for that course
function getAssignmentsByCourseId(courseId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const courseAssignments = assignments.filter(a => a.courseId === courseId);
      resolve(courseAssignments);
    }, 1800);
  });
}
