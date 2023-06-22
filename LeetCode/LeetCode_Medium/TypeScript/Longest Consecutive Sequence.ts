function longestConsecutive(nums: number[]): number {
  const consecutiveSequence: Array<number> = [];

  nums.sort((a: number, b: number) => a - b);

  let length = 0;
  let i = 0;
  for (let n = 0; n < nums.length; n++) {
    if (n === 0) {
      i = nums[n] - 1;
    }

    if (i === nums[n]) continue;

    if (i + 1 !== nums[n]) {
      i = nums[n];
      consecutiveSequence.push(length);
      length = 1;
      continue;
    }
    i = nums[n];
    length += 1;
  }
  consecutiveSequence.push(length);

  return Math.max(...consecutiveSequence);
}
