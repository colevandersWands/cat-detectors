'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// --- declare all variables ---

while (true) {
  // --- gather the user's input (canceling not allowed) ---
  const input = prompt('please enter "cat"');

  if (typeof input === 'string') {
    // --- check the input and construct a message ---

    const message =
      input !== 'cat'
        ? '"' + input + '" is not a cat'
        : 'thank you for the cat';

    // --- display the message for the user ---

    alert(message);

    break;
  }
}
