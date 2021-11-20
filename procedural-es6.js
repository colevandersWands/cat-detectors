'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// ===== declare constants ====

const EXPECTED = 'cat';
const INSTRUCTIONS = 'please enter "' + EXPECTED + '"';

// ===== declare variables ====

let input = null;
let message = '';

// ===== declare functions =====

const gatherInput = () => {
  while (input === null) {
    input = prompt(INSTRUCTIONS);
  }
};

const createMessage = () => {
  if (input !== EXPECTED) {
    message = '"' + input + ' is not a ' + EXPECTED;
  } else {
    message = 'thank you for the ' + input;
  }
};

const display = () => {
  console.log(message);
  alert(message);
};

// ===== use functions =====

gatherInput();

createMessage();

display();
