function hello(name) {
    return `Hey there ${name}`;
}

function bye(name) {
    return `Goodbye there ${name}`;
}

// module.exports = hello; // only exports hello
// module.exports = bye; // only exports bye

module.exports = { sayHello: hello, sayBye: bye };