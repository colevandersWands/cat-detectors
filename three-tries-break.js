'use strict';

/*
  The Cat Detector (3 tries)

  This programs prompts the user to input a cat 3 times.
  If they do, the user is thanked.
  If they do not, it is too late
*/

// --- display the instructions ---

alert('you have 3 tries to enter "cat".');

// --- give the user 3 chances to input "cat" ---

catting: {
  const input = prompt('enter "cat" (3)');
  if (input !== 'cat') {
    const input = prompt('enter "cat" (2)');
    if (input !== 'cat') {
      const input = prompt('enter "cat" (1)');
      if (input !== 'cat') {
        // --- three tries are over, no thank you ---
        alert('too late!');
        break catting;
      }
    }
  }

  // --- thank them if they gave you a cat ---

  alert('thank you for the cat');
}
