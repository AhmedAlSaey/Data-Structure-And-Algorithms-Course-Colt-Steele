function maxSubarraySum(arr, windowSize) {
  if (windowSize > arr.length) {
    return null;
  }
  let maxSum = arr.slice(0, windowSize).reduce((prev, curr) => prev + curr);
  let currentSum = maxSum;
  for (let j = 1; j < arr.length - windowSize + 1; j++) {
    currentSum = currentSum - arr[j - 1] + arr[j + windowSize - 1];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
