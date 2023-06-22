// Priority Queue
class MyPriorityQueue<T> {
  private elements: { priority: number; value: T }[];

  constructor() {
    this.elements = [];
  }

  enqueue(value: T, priority: number): void {
    this.elements.push({ priority, value });
    this.sortElements();
  }

  dequeue(): T | undefined {
    return this.elements.shift()?.value;
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  private sortElements(): void {
    this.elements.sort((a, b) => b.priority - a.priority);
  }
}

// Solution
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  const priorityQueue = new MyPriorityQueue<number>();
  const result: Array<number> = [];

  for (let i = 0; i < nums.length; i++) {
    const mapValue = map.get(nums[i]);

    if (mapValue !== undefined) {
      map.set(nums[i], mapValue + 1);
      continue;
    }
    map.set(nums[i], 1);
  }

  for (const key of map.keys()) {
    const value = map.get(key);
    if (value !== undefined) {
      priorityQueue.enqueue(key, value);
    }
  }

  for (let i = 0; i < k; i++) {
    const frequentEl: number | undefined = priorityQueue.dequeue();
    if (frequentEl !== undefined) {
      result.push(frequentEl);
    }
  }

  return result;
}
