const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof a !== "number"
     || typeof b !== "number") {
        return "ERROR";
    }
    let result = 0;
    if (b >= a) {
        for (let i = a; i <= b; i++) {
            result += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            result +=i;
        }
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
