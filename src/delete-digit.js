/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(n);
  let maximum = -Infinity;

  for (let index = 0; index < digits.length; index += 1) {
    maximum = Math.max(maximum, Number(`${digits.slice(0, index)}${digits.slice(index + 1)}`));
  }
  return maximum;
}

module.exports = {
  deleteDigit
};
