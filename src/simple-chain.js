/**
 * Implement chainMaker object according to task description
 *
 */
let links = [];

const chainMaker = {
  getLength() {
    return links.length;
  },
  addLink(value) {
    links.push(arguments.length === 0 ? '' : String(value));
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > links.length) {
      links = [];
      throw new Error("You can't remove incorrect link!");
    }
    links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    links.reverse();
    return this;
  },
  finishChain() {
    const chain = links.map((value) => `( ${value} )`).join('~~');
    links = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
