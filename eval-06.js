"use strict";

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

const EXPECTED = "cat";

eval(`
  // --- declare constants ---

  const PROGRAM = \`

    // --- 1. gather user input ---

    const input = prompt('please enter "${EXPECTED}"');

    // --- 2. re-eval if input is null ---

    if (input === null) {
      eval(PROGRAM)

    } else {
      // --- create a message for the user ---

      const message =
        input === '${EXPECTED}'
          ? 'thank you for the ${EXPECTED}'
          : '"' + input + '" is not a ${EXPECTED}';

      // --- display the message ---

      alert(message);
    }\`

  // --- run the program ---

  eval(PROGRAM);
`);
