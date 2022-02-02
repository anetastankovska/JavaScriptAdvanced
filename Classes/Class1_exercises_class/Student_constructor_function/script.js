/* Student constructor function
Create a constructor function for Student objects with:
Properties:
firstName
lastName
birthYear
academy
grades - array of numbers
Methods:
getAge() - returns age of student
getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
getGradesAverage() - returns the average of the student grades
Create an array with 3 students */

function Student (firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function () {
        let thisYear = new Date().getFullYear();
        let age = thisYear - birthYear;
        return age;
    }

    this.getInfo = function () {
        return `This student ${firstName} ${lastName} from the academy ${academy}`
    }

    this.getGradesAverage = function () {
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        return sum / grades.length
    }
}

let student1 = new Student ("Aneta", "Stankovska", 1991, "Academy for programming", [6, 7, 10]);
console.log(student1);

let student2 = new Student ("Bob", "Bobsky", 1992, "Academy for programming", [5, 8, 10]);
console.log(student2);

let student3 = new Student ("Petko", "Petkovski", 1988, "Academy for programming", [6, 9, 10]);
console.log(student3);

console.log(student1.getAge());
console.log(student1.getInfo());
console.log(student1.getGradesAverage());