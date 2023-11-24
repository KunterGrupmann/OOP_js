
class Course {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(student, grade) {
        this.grades.push([student, grade]);
    }

    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
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

    discription() {
        return `${this.name}`
    }  

    getName() {
        return this.name
    } 
}

module.exports = Course
