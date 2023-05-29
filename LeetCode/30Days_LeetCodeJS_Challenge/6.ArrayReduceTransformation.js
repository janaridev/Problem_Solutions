/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
    if (nums.length === 0) return init
    nums.forEach((item) => {
        init = fn(init, item)
    })
    return init
};