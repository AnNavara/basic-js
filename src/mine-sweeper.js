const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        let arr = [];
        for (let j = 0; j < matrix[i].length; j++) {
            /*
            соседи el
            el[i-1][j-1] el[i-1][j] el[i-1][j+1]
            el[i][j-1]     el     el[i][j+1]
            el[i+1][j-1] el[i+1][j] el[i+1][j+1]
            */

            let counter = 0;

            if (matrix[i][j]) {
                arr.push(1);
            } else {
                // top
                if (i !== 0) {
                    if (matrix[i - 1][j - 1]) counter++;
                    if (matrix[i - 1][j]) counter++;
                    if (matrix[i - 1][j + 1]) counter++;
                }
                // center
                if (matrix[i][j - 1]) counter++;
                if (matrix[i][j + 1]) counter++;
                // bottom
                if (i !== matrix.length - 1) {
                    if (matrix[i + 1][j - 1]) counter++;
                    if (matrix[i + 1][j]) counter++;
                    if (matrix[i + 1][j + 1]) counter++;
                }

                arr.push(counter);
            }
        }
        result.push(arr);
    }
    return result;
}

module.exports = {
    minesweeper,
};
