const { Person } = require("./Person.js");

class Student extends Person{
    constructor(name) {
        super(name)
        this.name = name;
        this.__grades = [];
        this.__id = null;
    }

    set_id(id) {
        if (this.__id === null) {
            this.__id = id;
        } else {
            return "Can't change ID";
        }
    }

    get_id() {
        return this.__id;
    }

    add_grade(course, grade) {
        this.__grades.push([course, grade]);
    }

    get_grades() {
        return this.__grades;
    }

    get_average_grade() {
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

    toString() {
        return `${this.name}`;
    }
}

// Example usage:
const student = new Student("John");
student.set_id(1);
student.add_grade("Math", 90);
student.add_grade("English", 85);

console.log(`Student: ${student}`);
console.log(`ID: ${student.get_id()}`);
console.log(`Grades: ${JSON.stringify(student.get_grades())}`);
console.log(`Average Grade: ${student.get_average_grade()}`);

module.exports = {Student}
