Function.prototype.myApply = function(context) {
    if (typeof context === 'undefined' || context === null) {
        context = window
    }
    context.fn = this
    let args = arguments[1]
    let result
    if (args) {
        result = context.fn(...args)
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

function fc(m,n) {
    this.a = m ? m : this.a;
    this.b = n ? n : this.b;
    console.log(this.a);
    console.log(this.b);
}
console.log('==========')
fc(3,4);
console.log('==========')
fc.apply({a:1,b:2});
console.log('==========')
fc.myApply({a:1,b:2});