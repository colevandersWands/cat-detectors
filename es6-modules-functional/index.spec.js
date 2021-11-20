// ===== import and test function =====

import { detect } from "./index.js";

describe("detect: checks if the user input matches a given value", () => {
  describe("matching inputs", () => {
    it("thanks you for a cat", () => {
      let calls = 0;
      window.prompt = () => (calls++ >= 7 ? "cat" : null);
      const actual = detect("cat");
      expect(actual).toEqual({
        actual: "cat",
        expected: "cat",
        message: "thank you for the cat",
      });
    });
    it("thanks you for a dog", () => {
      let calls = 0;
      window.prompt = () => (calls++ >= 7 ? "dog" : null);
      const actual = detect("dog");
      expect(actual).toEqual({
        actual: "dog",
        expected: "dog",
        message: "thank you for the dog",
      });
    });
  });
  describe("not-matching inputs", () => {
    it("a cat is not a dog", () => {
      let calls = 0;
      window.prompt = () => (calls++ >= 7 ? "cat" : null);
      const actual = detect("dog");
      expect(actual).toEqual({
        actual: "cat",
        expected: "dog",
        message: '"cat" is not a dog',
      });
    });
    it("a dog is not a cat", () => {
      let calls = 0;
      window.prompt = () => (calls++ >= 7 ? "dog" : null);
      const actual = detect("cat");
      expect(actual).toEqual({
        actual: "dog",
        expected: "cat",
        message: '"dog" is not a cat',
      });
    });
  });
});
