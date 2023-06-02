/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => {
    const result = []
    arr.forEach((item, index) => {
        if (fn(item, index)) {
            result.push(item)
        }
    })
    return result;
};