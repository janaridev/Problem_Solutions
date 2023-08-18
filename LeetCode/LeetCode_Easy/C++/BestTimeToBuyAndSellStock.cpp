class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int maxProfit = 0, left = 0, right = 1;

        while (right < prices.size()) {
            if (prices[right] > prices[left]) {
                int profit = prices[right] - prices[left];
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            } else {
                left = right;
            }
            ++right;
        }

        return maxProfit;
    }
};