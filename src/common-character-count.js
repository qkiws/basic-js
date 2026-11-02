/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const counts = new Map();
  for (const character of s1) {
    counts.set(character, (counts.get(character) || 0) + 1);
  }

  let commonCount = 0;
  for (const character of s2) {
    const count = counts.get(character) || 0;
    if (count > 0) {
      commonCount += 1;
      counts.set(character, count - 1);
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
