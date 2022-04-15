function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let j = 0;
  let max = 0;
  let seen = {};
  while (j < str.length) {
    if (seen[str[j]] != null) {
      i = Math.max(seen[str[j]] + 1, i);
    }
    max = Math.max(max, j - i + 1);
    seen[str[j]] = j;
    j++;
  }
  return max;
}

console.log(findLongestSubstring("atbcta"));
