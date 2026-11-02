/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const usedNames = new Set();
  const nextSuffix = new Map();

  return names.map((name) => {
    if (!usedNames.has(name)) {
      usedNames.add(name);
      return name;
    }

    let suffix = nextSuffix.get(name) || 1;
    let candidate = `${name}(${suffix})`;
    while (usedNames.has(candidate)) {
      suffix += 1;
      candidate = `${name}(${suffix})`;
    }
    usedNames.add(candidate);
    nextSuffix.set(name, suffix + 1);
    return candidate;
  });
}

module.exports = {
  renameFiles
};
