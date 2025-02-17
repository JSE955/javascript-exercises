const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return 'ERROR';
    }
    if (typeof a !== 'number' || typeof b!== 'number') {
        return 'ERROR';
    }
    if (a % 1 !== 0 || b % 1 !== 0) {
        return 'ERROR';
    }
    let sum = 0;
    if (b > a) {
        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            sum = sum + i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
