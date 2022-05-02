const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let parsed = parseFloat(sampleActivity);
    if (
        sampleActivity === undefined ||
        typeof sampleActivity !== 'string' ||
        isNaN(parsed) ||
        typeof parsed !== 'number' ||
        parsed > MODERN_ACTIVITY ||
        parsed <= 0
    )
        return false;

    let t = Math.log(MODERN_ACTIVITY / parsed) / (0.693 / HALF_LIFE_PERIOD);

    return Math.ceil(t);
}

// console.log(dateSample('3.142')); // 12923
// console.log(dateSample('9.8888')); // 3445

// console.log(dateSample('ACTIVITY OVER 9000'));
// console.log(dateSample('one'));
// console.log(dateSample(''));
// console.log(dateSample(' '));
// console.log(dateSample(' \n\t\r'));

// console.log(dateSample(3), false);
// console.log(dateSample(3.312312), false);
// console.log(dateSample(false), false);
// console.log(dateSample(null), false);
// console.log(dateSample(undefined), false);
// console.log(dateSample([3]), false);
// console.log(dateSample(['3']), false);
// console.log(dateSample({ '3.14': '3dec' }), false);

module.exports = {
    dateSample,
};
