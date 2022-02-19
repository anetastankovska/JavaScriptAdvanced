function Academy (name, students, subjects, start, end, numberOfClasses) {
    this.name = name,
    this.students = students,
    this.subjects = subjects,
    this.start = start,
    this.end = end,
    this.numberOfClasses = this.subjects.length * 10,

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

function Academy (title, numberOfClasses, isElective, academy, students) {

}


function Student (firstName, lastName, age, completedSubjects, academy, currentSubject, startAcademy, startSubject)