const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!date) return 'Unable to determine the time of year!';

    try {
        for (const key in date) {
            if (date[key] !== Date[key]) {
                throw new Error('Invalid date!');
            }
        }

        if (!(date instanceof Date && !isNaN(date))) {
            throw new Error('Invalid date!');
        }

        const SEASONS = {
            winter: [11, 0, 1],
            spring: [2, 3, 4],
            summer: [5, 6, 7],
            autumn: [8, 9, 10],
        };

        for (const key in SEASONS) {
            if (SEASONS[key].includes(date.getMonth())) {
                return key;
            }
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getSeason,
};
