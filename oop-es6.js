'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// ===== declare class =====

class Detector {
  constructor(target = '') {
    this.target = target;
    this.input = null;
  }

  get message() {
    return this.input === this.target
      ? `thank you for the ${this.target}`
      : `"${this.input}" is not a ${this.target}`;
  }

  gatherInput() {
    while (this.input == null) {
      this.input = prompt(`please enter "${this.target}"`);
    }
  }
}

// ===== use class =====

// --- construct Detector instance ---

const catDetector = new Detector('cat');

// --- gather the user's input (canceling not allowed) ---

catDetector.gatherInput();

// --- check the input and construct a message ---

const message = catDetector.message;

// --- display the message for the user ---

alert(message);
