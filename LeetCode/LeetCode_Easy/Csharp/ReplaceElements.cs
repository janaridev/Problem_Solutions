class ReplaceElements
{
    public int[] Solution(int[] arr)
    {
        int rightMax = -1, newMax = 0;

        for (int i = arr.Length - 1; i >= 0; i--)
        {
            newMax = Math.Max(rightMax, arr[i]);
            arr[i] = rightMax;
            rightMax = newMax;
        }

        arr[arr.Length - 1] = -1;

        return arr;
    }
}