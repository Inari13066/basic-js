const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    if (str == "") {
        return "";
    }
    let answer = "";
    let counter = 1;
    for (let i = 1; i < str.length; i++) {
        if (str[i] == str[i - 1]) {
            counter++;
        } else {
            answer += `${counter == 1 ? "" : counter}` + str[i - 1];
            counter = 1;
        }
    }
    answer += `${counter == 1 ? "" : counter}` + str[str.length - 1];
    return answer;
}

module.exports = {
    encodeLine,
};
