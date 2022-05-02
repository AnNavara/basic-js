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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let highest = 0;
    let arr = n.toString().split('');

    for (let i = 0; i < arr.length; i++) {
        let nums = +[...arr.slice(0,i), ...arr.slice(i + 1)].join('')
        if (nums > highest) highest = nums
    }

    return highest
}

module.exports = {
    deleteDigit,
};
