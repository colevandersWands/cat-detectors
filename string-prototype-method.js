'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// ===== declare prototype method =====

String.prototype.detect = function () {
  // --- gather the user input (canceling not allowed) ---

  let input = null;
  while (input === null) {
    input = prompt(`please enter "${this}"`);
  }

  // --- check the input and construct a message ---

  const message =
    input !== this
      ? `"${input}" is not a ${this}`
      : `thank you for the ${this}`;

  // --- display the message for the user ---

  alert(message);
};

// ===== use the prototype method =====

'cat'.detect();
