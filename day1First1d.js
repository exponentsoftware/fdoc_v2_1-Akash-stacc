//1.d. Write a function called longestIncreasingSubsequence that takes an array of numbers as input and returns the length of the longest increasing subsequence in the array.
//A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

function longestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
    }
  }

  return maxLength;
}

const arr = [1, 4, 2, 5, 3];
console.log(longestIncreasingSubsequence(arr)); // Output: 4
