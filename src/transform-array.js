const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const controlSequences = new Set([
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ]);
  const discarded = new Set();
  const transformed = [];

  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];
    if (controlSequences.has(element)) {
      const targetIndex = element.endsWith('-next') ? index + 1 : index - 1;
      if (
        targetIndex >= 0
        && targetIndex < arr.length
        && !controlSequences.has(arr[targetIndex])
        && !discarded.has(targetIndex)
      ) {
        if (element.startsWith('--discard')) {
          discarded.add(targetIndex);
          if (targetIndex < index) {
            const outputIndex = transformed.findIndex((entry) => entry.index === targetIndex);
            if (outputIndex !== -1) transformed.splice(outputIndex, 1);
          }
        } else if (targetIndex < index) {
          const outputIndex = transformed.findIndex((entry) => entry.index === targetIndex);
          if (outputIndex !== -1) {
            transformed.splice(outputIndex + 1, 0, {
              value: arr[targetIndex],
              index: targetIndex,
            });
          }
        }
      }
      continue;
    }

    if (!discarded.has(index)) {
      transformed.push({ value: element, index });
      if (arr[index - 1] === '--double-next') {
        transformed.push({ value: element, index });
      }
    }
  }

  return transformed.map(({ value }) => value);
}

module.exports = {
  transform
};
