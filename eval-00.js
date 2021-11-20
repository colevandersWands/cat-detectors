"use strict";

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

const EXPECTED = "cat";
const PROGRAM = `
  // --- gather the user's input (canceling not allowed) ---

  let input = null;
  while (input === null) {
    input = prompt('please enter "${EXPECTED}"');
  }

  // --- check the input and construct a message ---

  let message = '';
  if (input !== '${EXPECTED}') {
    message = '"' + input + '" is not a ${EXPECTED}';
  } else {
    message = 'thank you for the ${EXPECTED}';
  }

  // --- display the message for the user ---

  alert(message);
`;

eval(PROGRAM);
