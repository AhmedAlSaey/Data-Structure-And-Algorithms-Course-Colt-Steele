function averagePair(arr, avg) {
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let desiredSum = avg * 2;
    let currentSum = arr[i] + arr[j];
    if (currentSum == desiredSum) {
      return true;
    } else if (currentSum > desiredSum) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
