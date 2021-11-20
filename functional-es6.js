'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// ===== declare functions =====

const gatherInput = (instructions = '', input = null) =>
  input === null ? gatherInput(instructions, prompt(instructions)) : input;

const createMessage = (actual = '', expected = '') =>
  actual !== expected
    ? `"${actual}" is not a ${expected}`
    : `thank you for the ${actual}`;

// ===== use functions =====

// --- gather the user's input (canceling not allowed) ---

const userInput = gatherInput('please enter "cat"');

// --- check the input and construct a message ---

const message = createMessage(userInput, 'cat');

// --- display the message for the user ---

alert(message);

/*
  this program uses functions to abstract the logic of the program
  now the "use functions" part of the program is very easy to read

  this program uses recursion instead of a while loop
    you can study recursion later in the course
*/
