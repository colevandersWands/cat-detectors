// 'use strict'; // what happens if you uncomment this line?

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// --- gather the user's input (canceling not allowed) ---

do {
  input = prompt('please enter "cat"');
  console.log("user input:", input);
} while (input === null);

// --- check the input and construct a message ---

if (input !== "cat") {
  message = '"' + input + '" is not a cat';
  console.log("path: if");
} else {
  message = "thank you for the cat";
  console.log("path: else");
}
console.log("final message:", message);

// --- display the message for the user ---

alert(message);

/*
  running code without strict mode is sometimes called "sloppy mode"
  you can do some things that are not allowed in strict mode

  in this program none of the variables are declared
  you may think this makes a program easier to read
  but it can actually cause some sneaky bugs

  what happens if you uncomment the `use strict` line?
*/
