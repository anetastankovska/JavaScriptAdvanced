function test (a) {
    let n = 3;
    let str = a.substring(0, a.length - n);
    return str;

}


let t = test('abcdefg');
console.log(t);

let t1 = test('1234');
console.log(t1);

let t2 = test('fgedcba');
console.log(t2);