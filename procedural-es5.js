'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// ===== declare variables ====

var input = null,
  expected = 'cat',
  instructions = 'please enter "' + expected + '"',
  message = '';

// ===== use functions =====

gatherInput();

createMessage();

display();

// ===== declare functions (hoisted) =====

function gatherInput() {
  while (input === null) {
    input = prompt(instructions);
  }
}

function createMessage() {
  if (input !== expected) {
    message = '"' + input + ' is not a ' + expected;
  } else {
    message = 'thank you for the ' + input;
  }
}

function display() {
  console.log(message);
  alert(message);
}
