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

function repeater(str, options = {}) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options || {};

  const repeatedAddition = Array(Math.max(0, additionRepeatTimes))
    .fill(String(addition))
    .join(additionSeparator);
  const repeatedString = `${String(str)}${repeatedAddition}`;

  return Array(Math.max(0, repeatTimes)).fill(repeatedString).join(separator);
}

module.exports = {
  repeater
};
