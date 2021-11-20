'use strict';

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

// ===== declare constructor function =====

function Detector(target) {
  this.target = target || '';
  this.input = null;
}

Detector.prototype.getMessage = function () {
  if (this.input === this.target) {
    return 'thank you for the ' + this.target;
  } else {
    return '"' + this.input + '" is not a ' + this.target;
  }
};

Detector.prototype.gatherInput = function () {
  while (this.input === null) {
    this.input = prompt('please enter "' + this.target + '"');
  }
};

// ===== use constructor =====

// --- declare all variables ---

var catDetector, message;

// --- construct Detector instance ---

catDetector = new Detector('cat');

// --- gather the user's input (canceling not allowed) ---

catDetector.gatherInput();

// --- check the input and construct a message ---

message = catDetector.getMessage();

// --- display the message for the user ---

alert(message);
