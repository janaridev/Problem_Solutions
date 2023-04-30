class Solution {
public:
    string sortString(string &str) {
        sort(str.begin(), str.end());
        return str;
    }

    bool isAnagram(string s, string t) {
        string first = sortString(s);
        string second = sortString(t);

        if (first == second)
            return true;

        return false;
    }
};