// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

someRecursive([1, 2, 3, 4], isOdd) // true
someRecursive([4, 6, 8, 9], isOdd) // true
someRecursive([4, 6, 8], isOdd) // false
someRecursive([4, 6, 8], val => val > 10); // false

function someRecursive(arr, cb) {
    if (arr.length === 0) return false
    if (cb(arr[arr.length - 1])) return true
    arr.pop()
    return someRecursive(arr, cb)
}

console.log(someRecursive([4, 6, 8], isOdd))