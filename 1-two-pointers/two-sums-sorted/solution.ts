class TwoSumsSortedSolution {
  twoSum(nums: number[], target: number): boolean {
    let left = 0,
      right = nums.length - 1;
    while (right > left) {
      const lNum = nums[left],
        rNum = nums[right];
      const sum = lNum + rNum;
      if (sum === target) {
        return true;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return false;
  }
}
