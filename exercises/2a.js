// https://tech-docs.corndel.com/js/loop-control-flow.html

/**
 * Calculates the sum of numbers in an array that are either even or greater than 10,
 * but skips numbers that are both.
 *
 * @example
 * // returns 37
 * sumSelective([1, 4, 12, 15, 20, 5, 8, 10])
 *
 * @param {number[]} numbers - An array of numbers to be processed.
 * @returns {number} The sum of numbers that meet the criteria.
 */
export function sumSelective(numbers) {
  let i = 0
  let result = 0

  while (i < numbers.length) {
    const num = numbers[i]
    i++

    if (num % 2 === 0 && num > 10) {
      continue
    }

    if (num % 2 === 0 || num > 10) {
      result += num
    }
  }

  return result
}
