/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
    const result = []
    arr.forEach((item, index) => {
        result.push(fn(item, index))
    })

    return result
};