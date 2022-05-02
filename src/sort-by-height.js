const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const idx = [];
    arr.forEach((e, i) => {
        if (e === -1) {
            idx.push(i);
        }
    });

    let newArr = arr.filter((e) => e !== -1).sort((a, b) => a - b);

    idx.forEach((index) => {
        if (index === 0) {
            newArr = [-1, ...newArr];
        } else {
            newArr = [...newArr.slice(0, index), -1, ...newArr.slice(index)];
        }
    });
    return newArr;
}

module.exports = {
    sortByHeight,
};
