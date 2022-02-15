function first(worktime) {
    return new Promise((resolve, reject) => {
        if (worktime <= 100) {
            reject("It is to short of a work time. Please try again later!");
        }
        setTimeout(() => {
            resolve('First thing, preparing for second');
        }, worktime);
    });
}

function second() {
    console.log('Second thing');
}

first(4000)
    .then(data => {
        console.log(data);
        second();
    })
    .catch(error => console.log(`ERROR: ${error}`))
    .finally(() => console.log(`Everything is done at: ${new Date()}`));