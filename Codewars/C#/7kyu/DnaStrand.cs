class DnaStrand
{
    public string Solution(string dna)
    {
        string result = string.Empty;

        var dict = new Dictionary<char, char>()
        {
            { 'A', 'T' },
            { 'G', 'C' },
            { 'T', 'A' },
            { 'C', 'G' }
        };


        for(int i = 0; i < dna.Length; i++)
        {
            if (dict.ContainsKey(dna[i]))
            {
                char charOfDict;
                dict.TryGetValue(dna[i], out charOfDict);
                result += charOfDict.ToString();
            }
        }

        return result;
    }
}