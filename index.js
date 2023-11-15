
const {Person} = require('./Person.js')
const {Student} = require('./Student.js')
const {Course} = require('./Course.js')
const {School} = require('./School.js')

const school = new School ("Awesome School")
const student1 = new Student("John Smith")
student1.setDateOfBirth(1995)
const student2 = new Student("Mary Lee")
student2.setDateOfBirth(2000)

school.add_student(student1)
school.add_student(student2)

//we cannot add one student twice
school.add_student(student1)

console.log(school.get_students().length)  // 2

const course1 = new Course("Math")
const course2 = new Course("Physics")

school.add_course(course1)
school.add_course(course2)

console.log(school)

//we cannot add one course twice
school.add_course(course1)

console.log(school.get_courses().length) // 2

school.add_student_grade(student1, course1, 4)
school.add_student_grade(student1, course2, 5)
school.add_student_grade(student2, course1, 5)

console.log(student1)
console.log(student2)

const student3 = new Student("Cocoo Turner")
student3.setDateOfBirth(2000)

//cannot add grades to the student who is not in the school
school.add_student_grade(student3, course1, 5)

console.log(student3.get_grades().length) // 0

school.add_student(student3)
school.add_student_grade(student3, course1, 3)
school.add_student_grade(student3, course2, 5)

console.log(student3.get_grades().length) // 2

console.log(student3.get_grades())  
console.log(course1.get_grades())  

console.log("Students ordered by average grade:")
console.log("Student - avg grade")
console.log("-".repeat(30))
console.log(school.get_students_ordered_by_average_grade())
console.log("-".repeat(30))
school.get_students_ordered_by_average_grade().forEach((student) => {
    console.log(student.name, student.get_average_grade())
})
        
console.log()
console.log("Course average grades")
school.get_courses().forEach((course) => {
    console.log(course.name, course.get_average_grade())
})