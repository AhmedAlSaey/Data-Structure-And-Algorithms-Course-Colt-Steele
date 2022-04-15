function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyObj = {};
  for (let char of str1) {
    frequencyObj[char] = (frequencyObj[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!frequencyObj[char]) {
      return false;
    }
    frequencyObj[char] = (frequencyObj[char] || 0) - 1;
  }
  return true;
}
console.log(validAnagram("zahmeed", "ahmeeaz"));
