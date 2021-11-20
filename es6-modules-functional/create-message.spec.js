// ===== import and test function =====

import { createMessage } from "./create-message.js";

describe("createMessage: helpfully says if a string is the correct string", () => {
  describe("matching inputs", () => {
    it("thanks you for a cat", () => {
      const actual = createMessage("cat", "cat");
      expect(actual).toEqual("thank you for the cat");
    });
    it("thanks you for a dog", () => {
      const actual = createMessage("dog", "dog");
      expect(actual).toEqual("thank you for the dog");
    });
  });
  describe("not-matching inputs", () => {
    it("a cat is not a dog", () => {
      const actual = createMessage("cat", "dog");
      expect(actual).toEqual('"cat" is not a dog');
    });
    it("a dog is not a cat", () => {
      const actual = createMessage("dog", "cat");
      expect(actual).toEqual('"dog" is not a cat');
    });
  });
});
