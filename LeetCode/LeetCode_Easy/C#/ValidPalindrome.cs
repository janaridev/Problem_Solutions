class ValidPalindrome
{
    public bool Solution(string s)
    {
        char[] chars = s.ToLower().ToCharArray();

        int first = 0;
        int last = chars.Length - 1;

        while (first < last)
        {
            if (!char.IsLetterOrDigit(chars[first]))
            {
                ++first;
                continue;
            }

            if (!char.IsLetterOrDigit(chars[last]))
            {
                --last;
                continue;
            }

            if (chars[first] != chars[last])
            {
                return false;
            }

            ++first;
            --last;
        }

        return true;
    }
}