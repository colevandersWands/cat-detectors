'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// --- declare variables ---

let input = null;
let message = '';

while (
  // --- gather the user's input ---
  ((input = prompt('please enter "cat"')) !==
  // --- check the input and construct a message ---
  'cat'
    ? (message = `"${input}" is not a cat`)
    : (message = 'thank you for the cat'),
    // --- canceling is not allowed ---
  input === null)
);

// --- display the message for the user ---

alert(message);
