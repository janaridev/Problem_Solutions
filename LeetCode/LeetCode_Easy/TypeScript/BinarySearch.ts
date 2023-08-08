function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const half = Math.floor((left + right) / 2);

    if (nums[half] === target) {
      return half;
    } else if (nums[half] < target) {
      left = half + 1;
    } else {
      right = half - 1;
    }
  }

  return -1;
}
