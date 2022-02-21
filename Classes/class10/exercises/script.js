function Academy (name, start, end) {
    this.name = name,
    this.students = [],
    this.subjects = [],
    this.start = start,
    this.end = end,
    this.numberOfClasses = this.subjects.length * 10;

    this.updateNumberOfClasses = () => {this.numberOfClasses = this.subjects.length * 10};

    this.addSubject = (subjectObj) => {
        this.subjects.push(subjectObj);
        this.updateNumberOfClasses();
    }
      

    this.printStudents = () => {
        for (let student of this.students) {
            console.log(student);
        }
    },

    this.printSubjects = () => {
        for (let subject of this.subjects) {
            console.log (subject);
        }
    }
}


let sedc = new Academy ("SEDC", "01/11/2021", "31/10/2022");
console.log(sedc);
sedc.printStudents();

function Subject (title, isElective, academy) {
    this.title = title,
    this.isElective = isElective,
    this.academy = academy,
    this.students = [],
    this.numberOfClasses = 10,
    this.academy.addSubject(this)

    this.overrideClasses = number => {this.numberOfClasses = number < 3 ? 3 : number}
}

let htmlSubject = new Subject ("HTML", false, sedc);
console.log(htmlSubject);
let cssSubject = new Subject ("CSS", false, sedc);
console.log(cssSubject);



function Student (firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.completedSubjects = [],
    this.academy = null,
    this.currentSubject = null,
    
    this.startAcademy = academyObj => {
        this.academy = academyObj;
        academyObj.students.push(this);
    },

    this.startSubject = subjectObj => {
        if (this.academy === null) {
            console.log("No academy found");
            return;
        };
        if (this.academy.subjects.includes(subjectObj)) {
           this.currentSubject = subjectObj;
           subjectObj.students.push(this); 
        } else (console.log(`This academy does not contain ${subjectObj.title}`));
        
    }

}

let aneta = new Student ("Aneta", "Stankovska", 30);
aneta.startAcademy(sedc);
aneta.startSubject(htmlSubject);
console.log(aneta);
console.log(sedc);
console.log(htmlSubject);
console.log(sedc);

htmlSubject.overrideClasses(2);
console.log(htmlSubject.numberOfClasses);

