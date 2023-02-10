class LongestCommonPrefix
{
    public string Solution(string[] strs)
    {
        string res = "";

        for (int i = 0; i < strs[0].Length; i++)
        {
            foreach (var s in strs)
            {
                if (i == s.Length || s[i] != strs[0][i]) return res;
            }
            res += strs[0][i];
        }

        return res;
    }
}