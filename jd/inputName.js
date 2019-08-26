 function inputName(arr) {
    let list = [];
    let tmp = {};
    for (let i of arr) {
        let name = i.split(' ');
        let fistName = name[0];
        if(obj[fistName]) {
            obj[fistName].push(name);
        }else {
            obj[fistName] = [name];
        }
    }
    let resList = Object.entries(obj).sort((a, b) => {return Object.values(a)[0] - Object.values(b)[0]});
    console.log(resList);
}