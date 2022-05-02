const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here

        let counter = 0;

        if (Array.isArray(arr)) {
            counter++;
            if (arr.length) {
                let depths = arr.map((e) => {
                    return this.calculateDepth(e);
                });
                counter += Math.max(...depths);
            }
        }

        return counter;
    }
}

// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5, [1]]));
// console.log(depthCalc.calculateDepth([1, [8, [[1]]], 2, 3, [8, []], 4, 5, []]));

module.exports = {
    DepthCalculator,
};
