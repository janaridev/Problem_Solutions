class Solution {
public:
    bool isValid(string s) {
        stack<char> stack;

        for (int i = 0; i < s.size(); i++) {
            if (s[i] == '(') { stack.push(')'); continue; }

            if (s[i] == '{') { stack.push('}'); continue; }

            if (s[i] == '[') { stack.push(']'); continue; }

            if (stack.empty() || stack.top() != s[i]) return false;
        
            stack.pop();
        }
        return stack.empty();
    }
};