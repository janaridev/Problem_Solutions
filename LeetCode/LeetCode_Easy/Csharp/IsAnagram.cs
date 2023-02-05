class IsAnagram
{
    public bool Solution(string s, string t)
    {
        char[] first = s.ToCharArray();
        char[] second = t.ToCharArray();

        Array.Sort(first);
        Array.Sort(second);

        if (first.SequenceEqual(second))
        {
            return true;
        }

        return false;
    }
}