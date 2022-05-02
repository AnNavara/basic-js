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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const arr = str.split('');

    let res = '';
    let prev = '';
    let counter = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (i === 0) {
            prev = arr[i];
        }
        if (prev !== arr[i]) {
            counter >= 2 ? (res += counter.toString() + prev) : (res += prev);
            prev = arr[i];
            counter = 0;
        }
        counter++;
    }

    return res;
}

module.exports = {
    encodeLine,
};
