function dailyTemperatures(temperatures: number[]): number[] {
  const result = new Array(temperatures.length).fill(0);
  const stack: Array<number> = [];

  for (let i = temperatures.length; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }
    if (
      stack.length > 0 &&
      temperatures[i] < temperatures[stack[stack.length - 1]]
    ) {
      result[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }

  return result;
}
