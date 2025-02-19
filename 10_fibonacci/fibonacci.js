const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS';
    }
    if (typeof num !== 'number') {
        num = Number(num);
    }
    if (num === 0) {
        return 0;
    }
    if (num === 1 || num === 2) {
        return 1;
    }
    let seq = [1, 1];
    for (let i = 3; i <= num; i++) {
        seq.push(seq[i - 3] + seq[i - 2]);
    }
    return seq[num - 1];

};

// Do not edit below this line
module.exports = fibonacci;
