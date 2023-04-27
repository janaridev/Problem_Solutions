class FindMaxMinValsOfList
{
    public int Min(int[] list)
    {
        int min = list[0];
        int i = 0;
        for (int j = i + 1; j < list.Length; j++)
        {
            if (min > list[j])
            {
                min = list[j];
            }
        }

        return min;
    }

    public int Max(int[] list)
    {
        int max = list[0];
        int i = 0;
        for (int j = i + 1; j < list.Length; j++)
        {
            if (max < list[j])
            {
                max = list[j];
            }
        }

        return max;
    }
}