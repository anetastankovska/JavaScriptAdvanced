let apiUrls = {
    baseStudentUrl: 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json'
};

async function getDataAsync(url) {
    return await fetch(url).then(response => response.json());
}

function mapStudents(data) {
    return data.map(x => new Student(x.id, x.firstName, x.lastName, x.email, x.gender, x.city, x.averageGrade, x.age));
}

function createStudentsHtml(students) {
    return new Promise((resolve, reject) => {
        if (students.length === 0) {
            reject('There are no students to show');
        }

        let html = students
            .map(student => `<p>${student.showStudentInfo()}</p>`)
            .reduce((prev, curr) => prev.concat(curr), '');
        resolve(html);
    });
}

async function filterStudentsByAgeAsync(url, from, to) {
    let data = await getDataAsync(url);
    let students = mapStudents(data);
    return students.filter(student => student.age >= from && student.age <= to);
}

document
    .getElementById('get-data')
    .addEventListener('click', async function () {
        let data = await getDataAsync(apiUrls.baseStudentUrl);
        let students = mapStudents(data);
        let html = await createStudentsHtml(students);
        document.getElementById('result').innerHTML = html;
    });

document
    .getElementById('filter-by-age')
    .addEventListener('click', async function () {
        let from = document.getElementById('from').value;
        let to = document.getElementById('to').value;
        let filteredStudents = await filterStudentsByAgeAsync(apiUrls.baseStudentUrl, from, to);
        document.getElementById('result').innerHTML = await createStudentsHtml(filteredStudents);
    });