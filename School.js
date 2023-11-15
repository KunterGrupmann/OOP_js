class Student {
    constructor(name) {
        this.name = name;
        this.id = null;
        this.grades = {};
    }

    get_id() {
        return this.id;
    }

    set_id(id) {
        this.id = id;
    }

    add_grade(course, grade) {
        this.grades[course] = grade;
    }

    get_average_grade() {
        const numGrades = Object.keys(this.grades).length;
        if (numGrades === 0) {
            return 0;
        }

        const totalGrade = Object.values(this.grades).reduce((acc, grade) => acc + grade, 0);
        return totalGrade / numGrades;
    }
}

class Course {
    constructor(name) {
        this.name = name;
        this.grades = {};
    }

    add_grade(student, grade) {
        this.grades[student] = grade;
    }
}

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.courses = [];
    }

    add_course(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
        }
    }

    add_student(student) {
        if (!this.students.includes(student)) {
            let id = Math.floor(Math.random() * 1000) + 1;
            while (this.students.some(s => s.get_id() === id)) {
                id = Math.floor(Math.random() * 1000) + 1;
            }
            student.set_id(id);
            this.students.push(student);
        }
    }

    add_student_grade(student, course, grade) {
        if (this.students.includes(student) && this.courses.includes(course)) {
            student.add_grade(course, grade);
            course.add_grade(student, grade);
        }
    }

    get_students() {
        return this.students;
    }

    get_courses() {
        return this.courses;
    }

    get_students_ordered_by_average_grade() {
        this.students.sort((a, b) => b.get_average_grade() - a.get_average_grade());
        return this.students;
    }
}

module.exports = {School}
