class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.courses = [];
    }

    addCourse(course) {
        if (this.courses.includes(course)) {
            this.courses.push(course);
        }
    }

    addStudent(student) {
        if (this.students.includes(student)) {
            let id = Math.floor(Math.random() * 100) + 1;
            while (this.students.some(s => s.getId() == id)) {
                id = Math.floor(Math.random() * 100) + 1;
            }
            student.setId(id);
            this.students.push(student);
        }
    }

    addStudentGrade(student, course, grade) {
        if (this.students.includes(student) && this.courses.includes(course)) {
            student.addGrade([course, grade]);
            course.addGrade([student, grade]);
        }
    }

    getStudents() {
        return this.students;
    }

    getCourses() {
        return this.courses;
    }

    getStudentsOrderedByAverageGrade() {
        this.students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
        return this.students;
    }
    getName() {
        return this.name

    } 
}

module.exports = School
