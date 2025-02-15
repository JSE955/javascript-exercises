const removeFromArray = function(arr, ...values) {
    for (const value of values) {
        let index = arr.indexOf(value);
        if (index === -1) {
            continue;
        }
        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(value, index);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
