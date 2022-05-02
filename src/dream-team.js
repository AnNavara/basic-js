const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    if (!Array.isArray(members)) return false

    const coolName = members
        .filter((e) => typeof e === 'string')
        .map((e) => e.replace(/\s/g, '')[0].toUpperCase())
        .sort((strA, strB) => {
            if (strA > strB) return 1;
            if (strA < strB) return -1;
            return 0;
        });

    return coolName.join('');
}

module.exports = {
    createDreamTeam,
};
