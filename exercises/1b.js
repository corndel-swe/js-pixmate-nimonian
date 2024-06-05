// https://tech-docs.corndel.com/js/for-of-loops.html

/**
 * Adds together all the numbers in the array
 *
 * @example
 * // returns 11
 * sumArray([1, 3, 7])
 *
 * @param {number[]} arr - An array of numbers
 * @returns {number} The sum of the array
 */
export function sumArray(arr) {
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }

  return result
}
