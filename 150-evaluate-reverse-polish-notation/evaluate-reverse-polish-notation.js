/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    for (let token of tokens) {

        if (!isNaN(+token)) {
            stack.push(Number(token));

        } else {
            let b = stack.pop();
            let a = stack.pop();
            if (token == "+") stack.push(a + b);
            else if (token == "-") stack.push(a - b);
            else if (token == "*") stack.push(a * b);
            else stack.push(Math.trunc(a / b));
        }
    }
    return stack[0]
};