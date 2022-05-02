const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(initArr) {
    try {
        const arrMethods = {
            '--discard-next': (arr, idx) => {
                if (idx === 0) return arr.splice(idx, 2);
                return [
                    ...arr.slice(0, idx),
                    // Replace Self with falsy
                    false,
                    // Replace Value with falsy
                    false,
                    ...arr.slice(idx + 2),
                ];
            },
            '--discard-prev': (arr, idx) => {
                if (idx === 0) return arr.splice(1);
                return [
                    ...arr.slice(0, idx - 1),
                    // Replace Value with falsy
                    false,
                    // Replace Self with falsy
                    false,
                    ...arr.slice(idx + 1),
                ];
            },
            '--double-next': (arr, idx) => {
                if (idx === 0) return arr.splice(1);
                return [
                    ...arr.slice(0, idx),
                    // Replace self
                    false,
                    // Double next Value
                    ...arr.slice(idx + 1, idx + 2),
                    ...arr.slice(idx + 1),
                ];
            },
            '--double-prev': (arr, idx) => {
                if (idx === 0) return arr.splice(1);
                return [
                    ...arr.slice(0, idx),
                    // Double Prev value
                    ...arr.slice(idx - 1, idx),
                    // Replace self with falsy
                    false,
                    ...arr.slice(idx + 1),
                ];
            },
        };

        // Build arrays of check mods
        const arrMods = [];
        const discardMods = [];
        const doubleMods = [];
        for (const key in arrMethods) {
            if (key.includes('discard')) {
                discardMods.push(key);
            } else if (key.includes('double')) {
                doubleMods.push(key);
            }
            arrMods.push(key);
        }

        const checkIncludes = (checkArr, checkOver = arrMods) => {
            let includes = false;
            for (const key in checkOver) {
                if (checkArr.includes(checkOver[key])) includes = true;
            }
            return includes;
        };

        // Check if is an Array
        if (!Array.isArray(initArr)) {
            throw new Error(
                "'arr' parameter must be an instance of the Array!"
            );
        }
        // Check if is empty Array
        if (initArr.length === 0) return initArr;
        // Check if needs to be modified
        if (!checkIncludes(initArr)) return initArr;
        const arr = [...initArr];

        const getMod = (arr, checkOver = arrMods) => {
            let idx = 0;
            let mod = null;
            for (let index = 0; index < arr.length; index++) {
                if (checkOver.includes(arr[index])) {
                    idx = index;
                    mod = arr[index];
                    return { mod, idx };
                }
            }
        };

        const modifyArr = (arr) => {
            let resultArr = [...arr];
            const { mod, idx } = getMod(resultArr);
            resultArr = arrMethods[mod](resultArr, idx);
            if (checkIncludes(resultArr)) {
                resultArr = modifyArr(resultArr);
            }
            return resultArr;
        };

        // Create resulting array and filter non-number values
        return modifyArr(arr).filter((e) => e !== false);
    } catch (error) {
        throw new Error(error.message);
    }
}
// ??? Why control sequence brakes ???

module.exports = {
    transform,
};
