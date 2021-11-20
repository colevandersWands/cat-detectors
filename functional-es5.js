'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// ===== use functions =====

// --- declare all variables ---
//  because of hoisting it was common practice
//   to declare all `var` variables all the top of a file

var userInput, message;

// --- gather the user's input (canceling not allowed) ---

userInput = gatherInput('please enter "cat"');

// --- check the input and construct a message ---

message = createMessage(userInput, 'cat');

// --- display the message for the user ---

alert(message);

// ===== declare functions (hoisted) =====
//  because function declarations are hoisted
//    you can write them at the bottom of the page
//    and use them at the top of the page
//  this can sometimes make a program easier to read

function gatherInput(instructions, input) {
  instructions = instructions || '';
  input = input || null;

  return input === null
    ? gatherInput(instructions, prompt(instructions))
    : input;
}

function createMessage(actual, expected) {
  actual = actual || '';
  expected = expected || '';

  return actual !== expected
    ? '"' + actual + ' is not a ' + expected
    : 'thank you for the ' + actual;
}

/*
  this program uses functions to abstract the logic of the program
  now the "use functions" part of the program is very easy to read

  this program uses recursion instead of a while loop
    you can study recursion later in the course
*/
