arr = [1,2,3];
arr.push.apply(arr,[2,3,4,1])
console.log(arr)

[4,5,6].map(i => arr.push(i))
console.log(arr)