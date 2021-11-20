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
    const input = prompt('please enter "${EXPECTED}"');
    input === null
      ? eval(PROGRAM)
      : alert(
          input === '${EXPECTED}'
            ? 'thank you for the ${EXPECTED}'
            : '"' + input + '" is not a ${EXPECTED}',
        );\`;

  // --- run the program ---

  eval(PROGRAM);
`);
