function Academy (name, students, subjects, start, end) {
    this.name = name,
    this.students = students,
    this.subjects = subjects,
    this.start = start,
    this.end = end,
    this.numberOfClasses = (this.subjects.length) * 10,

    this.printStudents = (students) => {
        for (let student of students) {
            console.log(student);
        }
    },

    this.printSubjects = (subjects) => {
        for (let subject of subjects) {
            console.log (subject)
        }
    }
}

let studentArr = ["Aneta", "Aleksandar", "Ana", "Ilija", "Kristijan", "Stefan", "Marija"];
let subjectArr = ["HTML", "CSS", "JavaScript Basic", "JavaScript Advanced"]

let sedc = new Academy ("SEDC", studentArr, subjectArr, "01/11/2021", "31/10/2022");
console.log(sedc);
sedc.printStudents(studentArr);

function Subject (title, numberOfClasses, isElective, academy, students) {

}


function Student (firstName, lastName, age, completedSubjects, academy, currentSubject, startAcademy, startSubject) {

}