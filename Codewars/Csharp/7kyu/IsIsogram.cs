class IsIsogram
{
    public bool Solution(string str)
    {
        string lower = str.ToLower();

        for (int i = 0; i < lower.Length; i++)
        {
            for (int j = i + 1; j < lower.Length; j++)
            {
                if (lower[i] == lower[j])
                    return false;
            }
        }

        return true;
    }
}