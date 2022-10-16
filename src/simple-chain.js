const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: new Array(),
  getLength() {
    return this.arr.getLength();
  },
  addLink(v) {
    if (v === null) {
      v = "null";
    }
    this.arr.push(v);
    return this;
  },
  removeLink(p) {
    if (
      typeof p === "number" &&
      p - 1 < this.arr.length &&
      this.arr[p - 1] !== undefined
    ) {
      this.arr.splice(p - 1, 1);
      return this;
    }
    this.arr = [];
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let n = [...this.arr];
    this.arr = [];
    return `( ${n.join(" )~~( ")} )`;
  },
};

module.exports = {
  chainMaker,
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));
