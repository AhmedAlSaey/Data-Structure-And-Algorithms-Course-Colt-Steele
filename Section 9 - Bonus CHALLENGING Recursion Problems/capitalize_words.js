function capitalizeWords(arr) {
    if (arr.length === 0) return []
    let str = arr[0].toUpperCase();
    return [str].concat(capitalizeWords(arr.slice(1)))
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']