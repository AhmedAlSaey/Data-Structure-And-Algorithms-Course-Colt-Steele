function binarySearch(arr, num) {
    let i = 0
    let j = arr.length - 1
    while (i <= j) {
        let middle = Math.floor((j + i) / 2)
        if (arr[middle] === num) {
            return middle
        } else if (arr[middle] > num) {
            j = middle - 1
        } else {
            i = middle + 1
        }
    }
    return -1
}

console.log(binarySearch([10, 21, 33, 77, 88], 88))