/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = (fn, t) => {
    let interval;
    return function(...args) {
      const lastCall = Date.now()
      clearInterval(interval);
      interval = setInterval(() => {
        if (Date.now() - lastCall >= t) {
          fn(...args);
          clearInterval(interval);
        }
      }, 1);
    }
  };
  
  /**
   * const log = debounce(console.log, 100);
   * log('Hello'); // cancelled
   * log('Hello'); // cancelled
   * log('Hello'); // Logged at t=100ms
   */