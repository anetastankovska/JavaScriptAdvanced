// HIGHER ORDER FUNCTIONS
let students = [
    { firstName: "Bob", lastName: "H", grade: 5, age: 19 },
    { firstName: "Mel", lastName: "B", grade: 2, age: 33 },
    { firstName: "Jill", lastName: "M", grade: 3, age: 15 },
    { firstName: "Lucky", lastName: "J", grade: 5, age: 18 },
    { firstName: "Strike", lastName: "K", grade: 4, age: 16 },
    { firstName: "Eric", lastName: "I", grade: 1, age: 17 }
];
let students2 = [
    {
        firstName: "Bob", lastName: "H", grades: [
            { subject: "Math", grade: 2 },
            { subject: "Science", grade: 3 }
        ], age: 19
    },
    {
        firstName: "Mel", lastName: "B", grades: [
            { subject: "Math", grade: 3 },
            { subject: "Science", grade: 5 }
        ], age: 33
    }
];

// for (let i = 0; i < students.length; i++) {
//     console.log(`${students[i].firstName} ${students[i].lastName}`);
// }

// students.forEach(function (student) {
//     console.log(`mr. ${student.firstName} ${student.lastName}`);
// });

//students.forEach(student => console.log(`dr. ${student.firstName} ${student.lastName}`));

let studentWithGrade5 = [];
for (let student of students) {
    if (student.grade === 5) {
        studentWithGrade5.push(student);
    }
}
//studentWithGrade5.forEach(student => console.log(`${student.firstName} ${student.lastName} ${student.age}`));


// students
//     .filter(student => student.grade === 5)
//     .forEach(student => console.log(`${student.firstName} ${student.lastName} ${student.age}`));

let std = students
    .filter(student => student.age >= 18)
    .filter(student => student.grade > 4);

// console.log(std);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 2, 2, 1, 2];
let onlyTwos = numbers.filter(num => num === 2);
let onlyTwos1 = numbers.filter(num => true); // all the elements will be returned
// console.log(onlyTwos);


let mappedStudents = [];
for (let student of students) {
    let fullName = `${student.firstName} ${student.lastName}`;
    let dob = new Date().getFullYear() - student.age;
    mappedStudents.push({
        fullName: fullName,
        dateOfBirth: dob
    });
}
// console.log(mappedStudents);

let newStudentsArray = students.map(student => {
    let fullName = `${student.firstName} ${student.lastName}`;
    let dob = new Date().getFullYear() - student.age;
    return {
        fullName: fullName,
        dateOfBirth: dob
    };
});
// console.log(newStudentsArray);

let grades = students.map(student => student.grade);
// console.log(grades);

let numbers1 = [1, 2, 3, 4, 5, 6];
let numbersMultiply = numbers1.map(x => x * 2);
// console.log(numbersMultiply);




let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 2, 2, 1, 2];

let sum = 0;
for (let num of numbers2) {
    sum += num;
}
// console.log(sum);

let reduceSum = numbers2.reduce((prev, curr) => prev += curr, 0);
// console.log(reduceSum);

let sumGrades = students.reduce((secondReduceParameter, student) => secondReduceParameter += student.grade, 0); // secondReduceParameter = 0 the zero after the comma
// console.log(sumGrades);

let someObj = students.reduce((prev, curr) => {
    prev[curr.firstName] = curr.age;
    return prev;
}, {})
// console.log(someObj);

let someArr = students.reduce((prev, curr) => {
    prev.push(`${curr.firstName} ${curr.lastName}`);
    return prev;
}, []);

// console.log(someArr);

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 2, 2, 1, 2, 10, 11, 22, 12, 33];

let sortedAscending = numbers3.sort((a, b) => a - b);
console.log(sortedAscending);
let sortedDesc = numbers3.sort((a, b) => b - a);
console.log(sortedDesc);
let sorter = numbers3.sort();
console.log(sorter);

let sortedStudentsAscending = students.sort((student1, student2) => student1.firstName.localeCompare(student2.firstName));
console.log(sortedStudentsAscending);
let sortedStudentsDesc = students.sort((student1, student2) => student2.firstName.localeCompare(student1.firstName));
console.log(sortedStudentsDesc);
    
