
function isValid(s) {
    let map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(map.get(s[i]))
        } else if (stack.pop() !== s[i]) {
            return false;
        }
    }
    return stack.length === 0;
};


s = '[{]'
console.log(isValid(s));