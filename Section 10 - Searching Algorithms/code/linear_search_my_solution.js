function linearSearch(arr, val) {
    let index = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            index = i
            break
        }
    }
    return index
}

console.log(linearSearch([5, 9, 12], 9))