$.ajax({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/sedc-codecademy/skwd10-04-ajs/main/G3/Class06/exercises/students.json',
    success: function (response) {
        let data = JSON.parse(response);
        console.log(data);

        let task1 = data
            .filter(x => x.averageGrade > 3);
        
        let task2 = data
            .filter(x => x.gender === "Female" && x.averageGrade >= 5)
            .map(x => x.firstName);
        
        let task3 = data
            .filter(x => x.gender === "Male" && x.city === "Skopje" && x.age >= 18)
            .map(x => `${x.firstName} ${x.lastName}`);
        
        let task4 = data
            .filter(x => x.gender === "Female" && x.age > 24)
            .map(x => x.averageGrade);
        
        let task5 = data
            .filter(x => x.gender === 'Male')
            .filter(x => x.firstName.startsWith('B') && x.averageGrade > 2);

        let task6 = data
            .filter(x => x.email.endsWith('org'))
            .map(x => `${x.firstName} ${x.lastName}, ${x.email}`);

        let task7 = data
            .reduce((prev, curr) => {
                if (curr.age >25 && curr.firstName.startsWith('A')) {
                    prev.push(`${curr.firstName} ${curr.lastName} ${curr.age}`);
                }
                return prev;
            }, []);

        let task8 = data.reduce((prev, curr) => {
            if (curr.age > 25 && curr.firstName.startsWith('A')) {
                prev[curr.firstName] = curr.age;
            }
            return prev;
        }, {});

        let task9 = data.reduce((prev, curr) => {
            if (curr.age > 28 && curr.gender === "Female") {
                prev += `${curr.firstName} ${curr.age} `;
            }
            return prev;
        }, '');
        

        
        console.log(task1);
        console.log(task2);
        console.log(task3);
        console.log(task4);
        console.log(task5);
        console.log(task6);
        console.log(task7);
        console.log(task8);
        console.log(task9);
        
        
        let task4Reduce = data
        .reduce((prev, curr) => {
            if (curr.gender === "Female" && curr.age > 24) {
                prev.push(curr.averageGrade);
            }
            return prev;
        }, []);
        console.log(task4Reduce);
        
        let task10 = task4Reduce.sort((a, b) => a - b);
        console.log(task10);
        
    }


    
})