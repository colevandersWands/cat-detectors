// ===== import dependencies =====

import { gatherInput } from './gather-input.js';
import { createMessage } from './create-message.js';

// ===== declare, document and export function =====

/**
 * Gathers user input and compares it to an expected value.
 *
 * @param {string} [expected=''] - The expected user input.
 * @returns {Object} Object with two string properties:
 *  input: The user's input
 *  message: A message describing their input.
 */
export const detect = (expected = '') => {
  // --- gather the user's input (canceling not allowed) ---

  const actual = gatherInput(`please enter "${expected}"`);

  // --- check the input and create a message ---

  const message = createMessage(actual, expected);

  // --- return actual and expected values, and the message ---

  return {
    expected,
    actual,
    message,
  };
};
