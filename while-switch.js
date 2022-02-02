'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// --- gather the user's input (canceling not allowed) ---

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

// --- check the input and construct a message ---

let message = '';
switch (input !== 'cat') {
  case true:
    message = '"' + input + '" is not a cat';
    break;
  case false:
    message = 'thank you for the cat';
    break;
}

// --- display the message for the user ---

alert(message);
