/******************************开始写代码******************************/
let res;

let _s1 = read_line();
let _s2 = read_line();
let n1 = _s1.length;
let n2 = _s2.length;

res = longestSubStrLength(_s1, _s2);
print(res.length);



String.prototype._indexOf = String.prototype.indexOf;
String.prototype.indexOf = function()
{
    if(typeof(arguments[arguments.length - 1]) != 'boolean')
        return this._indexOf.apply(this,arguments);
    else
    {
        var bi = arguments[arguments.length - 1];
        var thisObj = this;
        var idx = 0;
        if(typeof(arguments[arguments.length - 2]) == 'number')
        {
            idx = arguments[arguments.length - 2];
            thisObj = this.substr(idx);
        }

        var re = new RegExp(arguments[0],bi?'i':'');
        var r = thisObj.match(re);
        return r==null?-1:r.index + idx;
    }
}


function longestSubStrLength(str1, str2){
    if (str1.length > str2.length) {
        let temp = str1;
        str1 = str2;
        str2 = temp;
    }
    let len1 = str1.length,
        len2 = str2.length;
    for (let j = len1; j > 0; j--) {
        for (let i = 0; i < len1 - j; i++) {
            let current = str1.substr(i, j);
            if (str2.indexOf(current) >= 0) {
                return current;
            }
        }
    }
    return "";
}