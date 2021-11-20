/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

'use strict';
let input = null;
for (; null === input; ) input = prompt('please enter "cat"');
let message = '';
(message =
  'cat' === input ? 'thank you for the cat' : '"' + input + '" is not a cat'),
  alert(message);

/*
  minified using https://jscompress.com/
  then formatted using Prettier

  Developers will almost always minify their code
  so that it is smaller and easier to send across the internet
  this means pages load faster and run more efficiently
*/
