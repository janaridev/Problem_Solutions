/**
 * @param {Function} fn
 * @return {Function}
 */
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
};

function sum(a, b) {
  return a + b;
}
const csum = curry(sum);
csum(1)(2); // 3
