class GrasshopperSummation
{
    public int Solution(int num)
    {
        int result = 0;
        for (int i = 0; i <= num; i++)
        {
            result += i;
        }
        return result;
    }
}