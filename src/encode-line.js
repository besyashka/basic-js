const { NotImplementedError } = require('../extensions/index.js');

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
  const arrLetters = str.split('');
  let count = 1;
  let result = '';

  arrLetters.forEach((letter, i) => {
    if (letter === str[i + 1]) {
      count++;
    } else {
      result += count > 1 ? `${count}${letter}` : letter;
      count = 1;
    }
  });

  return result;
}

module.exports = {
  encodeLine
};
