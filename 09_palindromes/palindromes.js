const palindromes = function (word) {
    let characterList = "abcdefghijklmnopqrstuvwxyz0123456789";
    let wordLowerCase = word.toLowerCase();
    let wordAsArray = wordLowerCase.split("");
    wordAsArray = wordAsArray.filter(character => characterList.includes(character));
    let cleanWord = wordAsArray.join("");
    let reversedWord = wordAsArray.reverse().join("");
    if (cleanWord === reversedWord) {
        return true;
    }
    return false;
    
};

// Do not edit below this line
module.exports = palindromes;
