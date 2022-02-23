function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = () => {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

function Student (firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person (firstName, lastName, age));
    this.academyName = academyName;
    this.studentId = studentId;
    
    this.study = () => {
        console.log(`The student ${this.firstName} is studying on the ${this.academyName} academy`);
    }
}

let studentAneta = new Student ("Aneta", "Stankovska", 30, "Web Development", "G306");
let studentPetko = new Student ("Petko", "Petkov", 35, "Web Design", "G516");

Student.prototype.getAcademy = studentObj => {
    console.log(studentObj.academyName);
    return studentObj.academyName;
}


function DesignStudent (firstName, lastName, age, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student (firstName, lastName, age));
    this.isStudentOfTheMonth = isStudentOfTheMonth;

    this.attendAdobeExam = () => {
        console.log(`The student ${this.firstName} is doing an Adobe exam`);
    }
}

function CodeStudent (firstName, lastName, age, hasIndividualProject, hasGropuProject) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age));
    this.hasIndividualProject = hasIndividualProject;
    this.hasGropuProject = hasGropuProject;

    this.doProject = str => {
        if (str === "individual") {
            this.hasIndividualProject = true;
        } else if (str === "group") {
            this.hasGropuProject = true
        }
    }
}

function NetworkStudent (firstName, lastName, age, academyPart) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age));
    this.academyPart = academyPart;

    this.attendCiscoExam = () => {
        console.log(`The student ${this.firstName} is doing Cisco exam.`);
    }
}

// let networkStd = new NetworkStudent ("Ane", "Stankovska", 25, 3);
// console.log(networkStd);