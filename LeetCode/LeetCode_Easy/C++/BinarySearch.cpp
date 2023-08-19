class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;

        while (left <= right) {
            int half = floor((left + right) / 2);
            
            if (nums[half] == target) {
                return half;
            }

            if (nums[half] < target) {
                left = half + 1;
            } else {
                right = half - 1;
            }
        }

        return -1;
    }
};