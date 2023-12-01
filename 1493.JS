//1493. Longest Subarray of 1's After Deleting One Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let maxCount = 0;
    let currentCount = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            // If the current element is the same as the previous, increase the count
            currentCount++;
        } else {
            // Update maxCount and reset currentCount
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 1;
        }
    }

    // Check for the last subarray
    maxCount = Math.max(maxCount, currentCount);

    return maxCount;
};
