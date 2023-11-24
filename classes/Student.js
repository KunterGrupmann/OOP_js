const Person = require("./Person.js");

class Student extends Person{
    constructor(name) {
        super()
        this.name = name;
        this.__grades = [];
        this.__id = null;
    }

    setId(id) {
        if (this.__id === null) {
            this.__id = id;
        } else {
            return "Can't change ID";
        }
    }

    getId() {
        return this.__id;
    }

    addGrade(course, grade) {
        this.__grades.push([course, grade]);
    }

    getGrades() {
        return this.__grades;
    }

    getAverageGrade() {
        let average = -1;
        if (this.__grades.length > 0) {
            let total = 0;
            for (let grade of this.__grades) {
                total += grade[1];
            }
            average = total / this.__grades.length;
        }
        return average;
    }

    getName() {
        return this.name
    } 
}

// Example usage:
const student = new Student("John");
student.setId(1);
student.addGrade("Math", 90);
student.addGrade("English", 85);

console.log(`Student: ${student}`);
console.log(`ID: ${student.getId()}`);
console.log(`Grades: ${JSON.stringify(student.getGrades())}`);
console.log(`Average Grade: ${student.getAverageGrade()}`);

module.exports = Student
