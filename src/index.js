module.exports = function check(str, bracketsConfig) {
  let openBrackets = bracketsConfig.map(x => x[0]);
    let closeBrackets = bracketsConfig.map(x => x[1]);
    let stack = [];

    for (let ch of str) {
        if (stack.length != 0) {
            let closeBracket = stack[stack.length - 1];
            if (ch == closeBracket) {
                stack.pop();
                continue;
            }
        }

        let bracketIndex = openBrackets.indexOf(ch);
        if (bracketIndex != -1) {
            let closeBracket = closeBrackets[bracketIndex];
            stack.push(closeBracket);
        } else {
            return false;
        }
    }
    return stack.length == 0;
}
