class ValidParentheses
{
    public bool Solution(string s)
    {
        var myStack = new Stack<char>();

        foreach (var item in s)
        {
            if (item == '(') { myStack.Push(')'); continue; }

            if (item == '{') { myStack.Push('}'); continue; }

            if (item == '[') { myStack.Push(']'); continue; }

            if (myStack.Count == 0 || item != myStack.Pop()) { return false; }
        }

        return myStack.Count == 0;
    }
}