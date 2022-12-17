class IsPalindrome
{
    public bool Solution(int x)
    {
        if (x < 10 && x > 0)
            return true;

        if (x < 0)
            return false;

        var reverse = x.ToString().ToCharArray();
        Array.Reverse(reverse);

        if (x.ToString() == new String(reverse))
            return true;
        else
            return false;
    }
}