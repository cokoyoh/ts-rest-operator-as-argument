/**
 * Write a function sum that sums numbers. It should take the numbers as rest parameters. If no arguments are given, it should return 0.
 */

const sum = (...numbers: Array<number>): number => {
  if (typeof numbers === undefined) {
    return 0;
  }

  let total: number = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log([sum(), sum(100), sum(2000, 1), sum(-500, -300)]);