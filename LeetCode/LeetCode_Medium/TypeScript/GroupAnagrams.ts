const sortingString = (str: string): string => {
    return str.split("").sort().join("")
}

function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 1) return new Array(strs)

    const map = new Map<string, number>()
    const result: Array<Array<string>> = []

    for (let i = 0; i < strs.length; i++) {
        const sorted = sortingString(strs[i])
        const exist = map.get(sorted)

        if (exist !== undefined) {
            const indexOfArray = result.findIndex(arr => arr.includes(strs[exist]))
            result[indexOfArray].push(strs[i])
            continue
        }

        map.set(sorted, i)
        result.push([strs[i]])
    }

    return result
};