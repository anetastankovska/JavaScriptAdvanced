function Student(id, fName, lName, email, gender, city, averageGrade, age) {
    this.id = id;
    this.firstName = fName;
    this.lastName = lName;
    this.email = email;
    this.gender = gender;
    this.city = city;
    this.averageGrade = averageGrade;
    this.age = age;

    this.showStudentInfo = function () {
        return `${this.firstName} ${this.lastName} is ${this.age} years old and it is from ${this.city}.`;
    }
}