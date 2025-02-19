const palindromes = function (input) {
    let acceptable = 'abcdefghijklmnopqrstuvwxyz1234567890';

    let cleanedArray = input.toLowerCase()
                             .split('')
                             .filter((char) => acceptable.includes(char));
    let cleanedString = cleanedArray.join('');
    let cleanedStringReversed = cleanedArray.reverse().join('');
    return cleanedString === cleanedStringReversed;
                             
};

// Do not edit below this line
module.exports = palindromes;
