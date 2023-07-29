class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::unordered_map<int, int> map;

        for (int i = 0; i < nums.size(); i++) {
            int keyOfMap = target - nums[i];
            auto iter = map.find(keyOfMap);

            if (iter != map.end()) {
                return {iter->second, i};
            }

            map[nums[i]] = i;
        }
        return {};
    }
};
