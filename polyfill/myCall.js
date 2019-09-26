// 'use strict'

Function.prototype.myCall = function (context) {
    context = context || window;
    let args = [...arguments].slice(1);
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn
    return result;
}

function fc(m,n) {
    this.a = m ? m : this.a;
    this.b = n ? n : this.b;
    console.log(this.a);
    console.log(this.b);
}
console.log('==========')
fc(3);
console.log('==========')
fc.call({a:1,b:2});
console.log('==========')
fc.myCall({b:1},3);