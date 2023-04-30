class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> setter;

        for (int i = 0; i < nums.size(); i++)
        {
            if (setter.find(nums[i]) != setter.end())
                return true;
                
            setter.insert(nums[i]);

        }

        return false;
    }
};