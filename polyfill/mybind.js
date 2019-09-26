Function.prototype.myBind = function (context) {
    if(typeof this !== "function") {
        throw new Error('Not a function');
    }
    let _self = this;
    // 去掉第一个为this的参数
    let args = [...arguments].slice(1);
    return function f() {
        if(this instanceof f) {
            return _self.apply(this, args.concat([...arguments]));
        }
        return _self.apply(context, args.concat([...arguments]))
    }
}

function func(m) {
    this.a = m ? m : this.a;
    console.log(this.a);
    this.a ++;
}
let obj = {
    a:1
};
func(6);
let func1 = func.bind(obj);
let func2 = func.bind(obj);
func1(5);
func2();
console.log(obj)