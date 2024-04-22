const reverseString = function(word) {
    let wordAsArray = word.split("");
    let wordAsArrayReversed = wordAsArray.toReversed();
    return wordAsArrayReversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
