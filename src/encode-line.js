const { NotImplementedError } = require('../lib');

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
  let encoded = '';
  let count = 0;

  for (let index = 0; index < str.length; index += 1) {
    count += 1;
    if (str[index] !== str[index + 1]) {
      encoded += `${count > 1 ? count : ''}${str[index]}`;
      count = 0;
    }
  }
  return encoded;
}

module.exports = {
  encodeLine
};
