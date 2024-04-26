
/**
 * Returns all numbers given an input string.
 * @param {string} any string
 * @returns {string} only numeric values of the original string
 */
export function getNumbers(input: string): string {
    return input.replace(/[^0-9]+/g, '');
}

/**
 * Converts a string to a two digit number,
 * comprising the first and last digit in the original string
 * @param {string} any string comprising of numeric digits only
 * @returns {number} the output value or 'code'
 */
export function getCode(input: string): number {
    return input.length > 0 ? parseInt(input[0] + input[input.length-1]) : 0;
}
