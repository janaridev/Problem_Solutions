function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        const mapKey = target - nums[i]
        const mapValue = map.get(nums[i])
        
        if (mapValue !== undefined) return new Array<number>(mapValue, i)
        map.set(mapKey, i)
    }
    return new Array()
};