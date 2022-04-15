function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!\
  if (arr.length <= 1) {
    return arr.length;
  }
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([]));
