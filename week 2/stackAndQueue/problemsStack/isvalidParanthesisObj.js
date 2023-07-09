function isValid(s) {
    let obj1 = {
        "(": ")",
        "[": "]",
        "{": "}",

    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else if (s[i] !== obj1[stack.pop()]) {
            return false;
        }
    }
    return stack.length === 0;
}



s = '[]'
console.log(isValid(s));