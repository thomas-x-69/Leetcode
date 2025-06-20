/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    for (let token of tokens) {

        if (token == "+" || token == "-" ||
            token == "*" || token == "/") {
            let b = stack.pop();
            let a = stack.pop();
            if (token== "+") stack.push(a + b);
            else if (token== "-") stack.push(a - b);
            else if (token== "*") stack.push(a * b);
            else stack.push(Math.trunc(a / b));
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0]
};