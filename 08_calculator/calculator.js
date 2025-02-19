const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(((total, curr) => total + curr), 0);
};

const multiply = function(arr) {
  return arr.reduce(((prod, curr) => prod * curr), 1);
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  let result = 1;
  for (let i = result; i <= num; i++) {
    result *= i;
  }
  return result;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
