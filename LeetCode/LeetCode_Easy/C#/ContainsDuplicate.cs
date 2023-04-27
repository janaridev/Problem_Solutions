class ContainsDuplicate
{
    public bool Solution(int[] nums)
    {
        var hash = new HashSet<int>();

        for (int i = 0; i < nums.Length; i++)
        {
            if (hash.Contains(nums[i]))
            {
                return true;
            }

            hash.Add(nums[i]);
        }

        return false;
    }
}