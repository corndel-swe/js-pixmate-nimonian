// https://tech-docs.corndel.com/js/loop-control-flow.html

/**
 * Finds the index of the first element in an array that is smaller than the element before it.
 *
 * @example
 * // returns 3
 * stepDown([10, 12, 15, 14, 16, 20])
 *
 * @example
 * // returns -1 (no element is smaller than its predecessor)
 * stepDown([5, 10, 15, 20])
 *
 * @param {number[]} numbers - An array of numbers to be examined.
 * @returns {number} The index of the first element that is smaller than its predecessor.
 *                   Returns -1 if no such element is found or if the array is empty.
 */
export function stepDown(numbers) {
  let i = 1
  let result = -1

  while (i < numbers.length) {
    const a = numbers[i - 1]
    const b = numbers[i]

    if (b < a) {
      result = i
      break
    }

    i++
  }

  return result
}
