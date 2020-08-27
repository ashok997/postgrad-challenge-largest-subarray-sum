function largestSubarraySum(array) {
  let sum = Math.max(0, array[0]);
  let highestSoFar = array[0];
  let i = 1;
  while (i < array.length) {
    sum = sum + array[i];
    if (sum > highestSoFar) {
      highestSoFar = sum;
    }
    i++;
  }
  return highestSoFar;
}
