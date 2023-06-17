public class Solution 
{
    public bool IsPalindrome(string s) 
    {
        string editedPalindrome = s.ToLower().Trim();
        int left = 0;
        int right = editedPalindrome.Length - 1;

        while (left < right)
        {
            if (!char.IsLetterOrDigit(editedPalindrome[left]))
            {
                ++left;
                continue;
            }

            if (!char.IsLetterOrDigit(editedPalindrome[right]))
            {
                --right;
                continue;
            }

            if (editedPalindrome[left] != editedPalindrome[right])
            {
                return false;
            }

            ++left;
            --right;
        }
        return true;
    }
}