function Test(name) {
    this.testName = name || 'default';
}
Test.prototype.name = 'test';
Test.prototype.obj = {
    a: 'a',
    b: 'b'
}

console.log(Test.prototype.hasOwnProperty('testName'))

let test1 = new Test('test');
console.log(test1.testName);
console.log(test1.name);
test1.testName = 'testA';
test1.name = 'testA';
console.log(test1.testName);
console.log(test1.name);
console.log(Test.prototype.name)

test1.obj.a = 'b'
console.log(Test.prototype.obj)

console.log(typeof Test)
console.log(typeof test1)
console.log(Test.constructor)
console.log(test1.constructor)
console.log(Object.prototype.toString.call(test1))
console.log(Object.prototype.toString.call(Test))

let test2 = new Test('test2');
console.log(test2.obj)