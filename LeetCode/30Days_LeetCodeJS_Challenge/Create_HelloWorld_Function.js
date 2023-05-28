/**
 * @return {Function}
 */
const createHelloWorld = () => {
    return function() {
        return "Hello World"
    }
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */