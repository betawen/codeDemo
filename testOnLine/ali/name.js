function obj(name){
    this.name = name;
    return this;
}
obj.prototype.name = 'name2';
var a = obj("name1");
var b = new obj();
console.log(a.name, b.name)
