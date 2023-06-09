public class Solution {
    public int[] TwoSum(int[] nums, int target) 
    {
        var dict = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            int diff = target - nums[i];
            
            if (dict.TryGetValue(nums[i], out var dictValue)) return new int[] { dictValue, i };

            dict.TryAdd(diff, i);
        }

        return new int[] {};
    } 
}  
    