// ===== declare, document and export function =====

/**
 * Continuously prompts the user until they click "ok".
 *
 * @param {string} [instructions=''] - The instructions to display.
 * @param {string|null} [input=null] - The input to check.
 * @returns {string} The text input from the user.
 */
export const gatherInput = (instructions = '', input = null) =>
  typeof input === 'string'
    ? input
    : gatherInput(instructions, prompt(instructions));
