/**
 * Write a function sum that sums numbers. It should take the numbers as rest parameters. If no arguments are given, it should return 0.
 */
var sum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    if (typeof numbers === undefined) {
        return 0;
    }
    var sum = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var number = numbers_1[_a];
        sum += number;
    }
    return sum;
};
var sums = [sum(), sum(100), sum(2000, 1), sum(-500, -300)];
console.log(sums);
