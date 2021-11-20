'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// --- gather the user's input (canceling not allowed) ---

let input = null;
while (input === null) input = prompt('please enter "cat"');

// --- check the input and construct a message ---

let message = '';
if (input !== 'cat') message = '"' + input + '" is not a cat';
else message = 'thank you for the cat';

// --- display the message for the user ---

alert(message);

/*
  this program uses inline loop and conditional bodies
  you can do this when there is only one statement in the body

  some people find it easier to read
  but it's easier to make a mistake if you do more than 1 thing in a body
*/
