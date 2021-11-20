// modules are always in strict mode, you don't need to write it

// --- import dependencies ---

import { detect } from "./index.js";

// --- call the imported function ---

const { actual, expected, message } = detect("cat");

// --- display the message for the user ---

alert(message);

// --- log the actual and expected values for the developer ---

console.log(actual, expected);
