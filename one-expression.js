'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

((expected = '') =>
  // --- 4. display the message for the user ---
  alert(
    ((actual = '') =>
      // --- 3. check the input and construct a message ---
      actual !== expected
        ? `"${actual}" is not a ${expected}`
        : `thank you for the ${expected}`)(
      // --- 2. gather the user's input (canceling not allowed) ---
      (function gatherInput(message = '', input = null) {
        return input === null ? gatherInput(message, prompt(message)) : input;
      })(`please enter "${expected}"`),
    ),
    // --- 1. define the expected input ---
  ))('cat');
