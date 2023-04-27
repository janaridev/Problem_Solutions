class StringToNumber
{
    public int Solution(string str)
    {
        if (!int.TryParse(str, out int parsedString))
            throw new ArgumentException("It's not a number");

        return parsedString;
    }
}