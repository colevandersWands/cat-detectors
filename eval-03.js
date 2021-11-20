"use strict";

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// --- declare constants ---

const EXPECTED = "cat";
const CREATE_MESSAGE = `
  const input = prompt('please enter "${EXPECTED}"');
  input === null
    ? eval(CREATE_MESSAGE)
    : input === ${EXPECTED}
      ? 'thank you for the ${EXPECTED}'
      : \`"\${input}" is not a ${EXPECTED}\``;

// --- gather & check input then create a message ---

const message = eval(CREATE_MESSAGE);

alert(message);
