function distinct(arr) {
    // Array.from
    return [...new Set(arr)]
}
let arr = [2,3,4,2]
console.log(distinct(arr))