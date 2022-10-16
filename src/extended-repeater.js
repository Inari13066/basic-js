const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let answer = [];
  let adds = [];
  let adding = "";
  let addition = "";
  if ("addition" in options) {
    addition = String(options.addition);
    if ("additionRepeatTimes" in options) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        adds.push(addition);
      }
      if (options.additionRepeatTimes > 1) {
        if ("additionSeparator" in options) {
          adding = adds.join(`${options.additionSeparator}`);
        } else {
          adding = adds.join("|");
        }
      } else {
        adding = addition;
      }
    } else {
      adding = addition;
    }
  }
  if ("repeatTimes" in options) {
    let strS = String(str);
    for (let i = 0; i < options.repeatTimes; i++) {
      answer.push(strS + adding);
    }
    if ("separator" in options) {
      return answer.join(`${options.separator.toString()}`);
    } else {
      return answer.join("+");
    }
  } else {
    return str.toString() + adding;
  }
}

module.exports = {
  repeater,
};
