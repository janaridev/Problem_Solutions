class MinStack {
private:
    ::stack<int> stack;
    ::stack<int> min;

public:
    void push(int val) {
        if (min.empty()) {
            min.push(val);
        } else if (min.top() >= val) {
            min.push(val);
        }
        stack.push(val);
    }
    
    void pop() {
        if (min.top() == stack.top()) {
            min.pop();
        }
        stack.pop();
    }
    
    int top() {
        return stack.top();
    }
    
    int getMin() {
        return min.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */