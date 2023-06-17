public class Solution 
{
    public bool IsValid(string s) 
    {
        var stack = new Stack<char>();

        foreach(var item in s)
        {
            if (item == '(') { stack.Push(')'); continue; }

            if (item == '{') { stack.Push('}'); continue; }

            if (item == '[') { stack.Push(']'); continue; }

            if (stack.Count() == 0 || stack.Pop() != item) { return false; }
        }
        return stack.Count() == 0;
    }
}