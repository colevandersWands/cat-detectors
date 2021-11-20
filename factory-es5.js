'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// ===== use functions =====

// --- declare all variables ---

var catFunctions, gatherInput, createMessage, userInput, message;

// --- create & assign functions from factory ---

catFunctions = detectorFactory('cat');
gatherInput = catFunctions[0];
createMessage = catFunctions[1];

// --- gather the user's input (canceling not allowed) ---

userInput = gatherInput();

// --- check the input and construct a message ---

message = createMessage(userInput);

// --- display the message for the user & developer (side-effect) ---

alert(message);

// ===== declare functions (hoisted) =====

function detectorFactory(expected) {
  expected = expected || '';

  return [
    function tryAgain(input) {
      return typeof input === 'string'
        ? input
        : tryAgain(prompt(`please enter "${expected}"`));
    },
    function (actual = '') {
      return actual !== expected
        ? `"${actual}" is not a ${expected}`
        : `thank you for the ${actual}`;
    },
  ];
}
