/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
    let i = 0
    const result = []
    arr.forEach((item) => {
        result.push(fn(item, i))
        ++i
    })

    return result
};