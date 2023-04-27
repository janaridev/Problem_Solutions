class IsSubsequence
{
    public bool Solution(string s, string t)
    {
        int i = 0;
        int j = 0;
        string result = "";

        while (i < s.Length && j < t.Length)
        {
            if (s[i] == t[j])
            {
                result += s[i];
                ++i;
                ++j;
            }
            else
                ++j;
        }

        return result == s;
    }
}