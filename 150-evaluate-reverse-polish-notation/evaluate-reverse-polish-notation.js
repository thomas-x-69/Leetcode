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
            stack.push(Math.trunc(eval((`${a} ${token} ${b}`))))
        }
    }
    return stack[0]
};