'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// --- declare all variables ---
//  because of hoisting it was common practice
//   to declare all `var` variables all the top of a file

var input, message;

// --- gather the user's input (canceling not allowed) ---

while (input === null) {
  input = prompt('please enter "cat"');
}

// --- check the input and construct a message ---

if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

// --- display the message for the user ---

alert(message);
