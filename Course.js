class Student {
    constructor() {
        this.name = "";
    }
}

class Course {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    add_grade(student, grade) {
        this.grades.push([student, grade]);
    }

    get_grades() {
        return this.grades;
    }

    set_grade(student, grade) {
        this.grades.push([student, grade]);
    }

    get_average_grade() {
        let average = -1;
        if (this.grades.length > 0) {
            let total = 0;
            for (let i = 0; i < this.grades.length; i++) {
                total += this.grades[i][1];
            }
            average = total / this.grades.length;
        }
        return average;
    }

    toString() {
        return this.name;
    }
}

module.exports = {Course}
