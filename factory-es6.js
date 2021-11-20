'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// ===== declare functions =====

const detectorFactory = (expected = '') => [
  function tryAgain(input = null) {
    return input === null
      ? tryAgain(prompt(`please enter "${expected}"`))
      : input;
  },
  (actual = '') =>
    actual !== expected
      ? `"${actual}" is not a ${expected}`
      : `thank you for the ${actual}`,
];

// ===== use functions =====

// --- create functions using factory ---

const [gatherInput, createMessage] = detectorFactory('cat');

// --- gather the user's input (canceling not allowed) ---

const userInput = gatherInput();

// --- check the input and construct a message ---

const message = createMessage(userInput);

// --- display the message for the user & developer (side-effect) ---

alert(message);
