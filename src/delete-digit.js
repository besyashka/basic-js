const { NotImplementedError } = require('../extensions/index.js');

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
  const numberStr = n.toString();
  let max = 0;

  for (let i = 0; i < numberStr.length; i++) {
    const newNumber = parseInt(numberStr.replace(numberStr[i], ''));
    if (newNumber > max) {
      max = newNumber;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
