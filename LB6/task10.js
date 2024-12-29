/**
 * @param {string} str 
 * @returns {boolean} 
 */
function checkBrackets(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of str) {
        if (brackets[char]) {
            stack.push(char);
        } else if (Object.values(brackets).includes(char)) {
            const lastOpen = stack.pop();
            if (brackets[lastOpen] !== char) {
                return false; 
            }
        }
    }

    return stack.length === 0;
}


console.log(checkBrackets("(someFn)")); 
console.log(checkBrackets("(someFn[{(){}[]}])")); 
console.log(checkBrackets("(someFn[{()]}")); 
console.log(checkBrackets("{[()]}")); 
console.log(checkBrackets("{[(])}")); 