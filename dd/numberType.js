let a = [true, 1, null, undefined, 'hhh'];
let b = Symbol();
let c = {h:'h'};
for(let item of a){
    console.log(typeof item);
}
console.log(typeof a);
console.log(typeof c);
console.log(a instanceof Array);
console.log(a instanceof Object);
console.log(c instanceof Object);
console.log(a.constructor === Array)
/// 是否在原型链上
console.log(Array.prototype.isPrototypeOf([]))
console.log(b.constructor)
console.log(c.constructor)

a.splice(2,2,[false,false]);
console.log(a)