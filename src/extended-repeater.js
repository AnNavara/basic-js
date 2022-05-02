const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
    str,
    {
        repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|',
    }
) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    // console.log(
    //     str,
    //     repeatTimes,
    //     separator,
    //     addition,
    //     additionRepeatTimes,
    //     additionSeparator
    // );

    let strAddition = '';

    if (String(addition) !== '') {
        strAddition = repeater(addition, {
            repeatTimes: additionRepeatTimes,
            separator: additionSeparator,
        });
    }

    let strArr = [];

    for (let i = 0; i < repeatTimes; i++) {
        strArr.push(`${str}${strAddition}`);
    }

    return strArr.join(separator);
}

/*
// 'TESTstrADD!'
console.log(
    repeater('TESTstr', {
        separator: 'ds',
        addition: 'ADD!',
        additionSeparator: ')))000',
    })
);

// 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
console.log(
    repeater(true, {
        repeatTimes: 3,
        separator: '??? ',
        addition: false,
        additionRepeatTimes: 2,
        additionSeparator: '!!!',
    })
);

// 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'
console.log(
    repeater(null, {
        repeatTimes: 3,
        separator: '??? ',
        addition: null,
        additionRepeatTimes: 3,
        additionSeparator: '!!!',
    })
);
*/

module.exports = {
    repeater,
};
