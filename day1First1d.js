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

//in the given array arr. We create an array dp of the same length as arr and initialize all its values to 1. The dp array will store the length of the longest increasing subsequence ending at each index of arr.
//then iterate over the array arr and for each index i, we check all the previous indices j (from 0 to i-1). If arr[i] is greater than arr[j] and the length of the subsequence ending at index j plus 1 is greater than the current length at index i, we update dp[i] with the new length.
//After the above loop, we find the maximum value in the dp array, which represents the length of the longest increasing subsequence in the array.

//Finally, we return the maxLength
