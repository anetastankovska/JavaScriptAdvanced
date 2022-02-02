/* Create a student registry page
Create an HTML page with student registry form with
First Name
Last Name
Age
Email
Create a student generator function
When the form is submitted, the inputs should be compiled into a new object from the generator function Student
This student should be added to a list called "database"
After submit the database should be printed in the console
The input fields should be cleared */

let buttonElement = document.getElementsByTagName("button")[0];
let firstNameInput = document.getElementById("firstName");
let database = document.getElementsByTagName("ul")[0];
let lastNameInput = document.getElementById("lastName");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");


function Student (firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

Student.prototype.toString = function () {
    return `First name: ${this.firstName}, last name: ${this.lastName}, age: ${this.age}, email: ${this.email}`;
}


function studentGenerator (fName, lName, age, email) {
    let student = new Student(fName, lName, age, email);
    return student;
}


buttonElement.addEventListener('click', function () {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let email = emailInput.value;
    let student = studentGenerator(firstName, lastName, age, email);
    console.log(student);
    database.innerHTML += `<li>${student.firstName} ${student.lastName} ${student.age} ${student.email} </li>`;


    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
    
})

