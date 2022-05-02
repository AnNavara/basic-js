const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 * aabcc
 * a = 2
 * b = 1
 * c = 2
 * aaacd
 * a = 3
 * b = 0
 * c = 1
 * d = 1
 *
 * obj1[a] > obj2[a] ? count += obj1[a] - obj2[a] : >>
 */
function getCommonCharacterCount(str1, str2) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let count = 0;

    const buildDictionary = (str) => {
        return str.split('').reduce((p, c) => {
            p[c] ? (p[c] += 1) : (p[c] = 1);
            return p;
        }, {});
    };

    let dictionary1 = buildDictionary(str1);
    let dictionary2 = buildDictionary(str2);

    for (const key in dictionary1) {
        if (dictionary2[key]) {
            dictionary1[key] > dictionary2[key]
                ? (count +=
                      dictionary1[key] - (dictionary1[key] - dictionary2[key]))
                : (count +=
                      dictionary2[key] - (dictionary2[key] - dictionary1[key]));
        }
    }

    return count;
}

getCommonCharacterCount('aabcc', 'adcaa');

module.exports = {
    getCommonCharacterCount,
};
