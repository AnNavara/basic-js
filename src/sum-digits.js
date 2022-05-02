const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const sum = (num) => {
        let res = num
            .toString()
            .split('')
            .reduce((p, c) => +p + +c);

        if (res.toString().split('').length > 1) res = sum(res);
        return +res;
    };

    return sum(n);
}

module.exports = {
    getSumOfDigits,
};
