function flatten(arr) {
    if (arr.length === 0) return []
    let firstList = Array.isArray(arr[0]) ? flatten(arr[0]) : [arr[0]]
    return firstList.concat(flatten(arr.slice(1, arr.length)))
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
    // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    // flatten([[1],[2],[3]]) // [1,2,3]
    // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3