const sortString = (str: string): string => {
    return str.split("").sort().join("")
}

function isAnagram(s: string, t: string): boolean {
    const first = sortString(s)
    const second = sortString(t)

    return first === second ? true : false
};