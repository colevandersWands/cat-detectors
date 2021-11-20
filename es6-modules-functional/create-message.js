// ===== declare, document and export function =====

/**
 * creates a message describing whether or not the user's input was correct.
 *
 * @param {string} [actual=''] - The user's actual input.
 * @param {string} [expected=''] - The expected input.
 * @returns {string} A message saying if the input was correct or not.
 */
export const createMessage = (actual = '', expected = '') =>
  actual === expected
    ? `thank you for the ${actual}`
    : `"${actual}" is not a ${expected}`;
