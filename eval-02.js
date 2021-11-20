'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// --- declare constants ---

const EXPECTED = 'cat';
const GATHER_INPUT = `
  const input = prompt('please enter "${EXPECTED}"');
  input === null ? eval(GATHER_INPUT) : input;`;

// --- gather the user's input (canceling not allowed) ---

const input = eval(GATHER_INPUT);

// --- check the input and construct a message ---

const message =
  input === EXPECTED
    ? `thank you for the ${EXPECTED}`
    : `"${input}" is not a ${EXPECTED}`;

// --- display the message for the user & developer (side-effect) ---

alert(message);
