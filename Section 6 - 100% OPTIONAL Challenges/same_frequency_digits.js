function sameFrequency(n1, n2) {
  let n1String = `${n1}`;
  let n2String = `${n2}`;
  if (n1.length !== n2.length) {
    return false;
  }
  let frequencyMap = {};
  for (let i = 0; i < n1String.length; i++) {
    let char = n1String[i];
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }
  for (let i = 0; i < n2String.length; i++) {
    let char = n2String[i];
    if (!frequencyMap[char]) {
      return false;
    }
    frequencyMap[char] = (frequencyMap[char] || 0) - 1;
  }
  return true;
}
console.log(sameFrequency(1821, 2812));
