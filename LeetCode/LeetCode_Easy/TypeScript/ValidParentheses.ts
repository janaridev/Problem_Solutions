function isValid(s: string): boolean {
    const stack: Array<string> = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') { stack.push(')'); continue; }

        if (s[i] === '[') { stack.push(']'); continue; }

        if (s[i] === '{') { stack.push('}'); continue; }

        if (stack.length <= 0 || s[i] !== stack.pop()) { return false; }
    }

    return stack.length === 0;
};
