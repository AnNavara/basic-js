const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(mac) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const regEx = /[0-9A-F]{2}/;
    let arr = mac.split('-');
    if (arr.length !== 6) return false;

    const isHex = (num) => {
        return regEx.test(num);
    };

    return arr.map((element) => isHex(element)).filter(e => e).length === 6;
}
module.exports = {
    isMAC48Address,
};
