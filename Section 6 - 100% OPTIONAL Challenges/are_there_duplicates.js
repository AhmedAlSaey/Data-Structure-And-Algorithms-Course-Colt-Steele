function areThereDuplicates(...arr) {
  if (arr.length <= 1) {
    return false;
  }
  arr.sort();
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] === arr[j - 1]) {
      return true;
    }
  }
  return false;
}
function areThereDuplicatesCooler() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 1, 3, 4));
