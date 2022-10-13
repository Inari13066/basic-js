const { NotImplementedError } = require("../extensions/index.js");

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
  let arrNew = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
    arrNew = arr.map((x) => x);
    for (let i = 0; i < arrNew.length; i++) {
      switch (arrNew[i]) {
        case "--discard-next":
          arrNew[i] = "";
          if (i != arrNew.length - 1) {
            arrNew[i + 1] = "";
          }
          break;
        case "--discard-prev":
          arrNew[i] = "";
          if (i != 0) {
            arrNew[i - 1] = "";
          }
          break;
        case "--double-next":
          if (i != arrNew.length - 1) {
            arrNew[i] = arrNew[i + 1];
          } else {
            arrNew[i] = "";
          }
          break;
        case "--double-prev":
          if (i != 0) {
            arrNew[i] = arrNew[i - 1];
          } else {
            arrNew[i] = "";
          }
          break;
      }
    }
  }
  return arrNew.filter((x) => {
    return x != "";
  });
}

module.exports = {
  transform,
};
