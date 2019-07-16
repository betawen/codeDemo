let obj = {name: 'tony'};

function Child(name){
    this.name = name;
}

Child.prototype = {
    constructor: Child,
    showName: function(){
        console.log(this.name);
    },
    myName:function () {
        console.log(this.name)
    }
}
var child = new Child('thomas');
child.showName(); // thomas

//  call,apply,bind使用
child.showName.call(obj);
child.showName.apply(obj);
let bind = child.showName.bind(obj); // 返回一个函数
bind(); // tony

// call和apply的区别，参数的区别
let arr1 = [1, 2, 19, 6];
//例子：求数组中的最值
console.log(Math.max.call(null, 1,2,19,6)); // 19
console.log(Math.max.call(null, arr1)); // NaN
console.log(Math.max.apply(null, arr1)); //  19 直接可以用arr1传递进去