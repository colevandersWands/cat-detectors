// ===== import and test function =====

import { gatherInput } from "./gather-input.js";

describe('gatherInput: continually prompts the user until they click "ok"', () => {
  describe("it passes the argument to prompt", () => {
    it('when the user clicks "ok" on the first try', () => {
      window.prompt = (instructions = "") => {
        expect(instructions).toEqual("hello");
        return "";
      };
      gatherInput("hello");
    });
    it('when the user clicks "ok" on the second try', () => {
      let calls = 0;
      window.prompt = (instructions = "") => {
        expect(instructions).toEqual("hello");
        calls++;
        return calls >= 2 ? "" : null;
      };
      gatherInput("hello");
    });
    it('when the user clicks "ok" on the 6th try', () => {
      let calls = 0;
      window.prompt = (instructions = "") => {
        expect(instructions).toEqual("hello");
        calls++;
        return calls >= 6 ? "" : null;
      };
      gatherInput("hello");
    });
  });
  describe("it returns the user input", () => {
    it('when the user clicks "ok" on the first try', () => {
      window.prompt = () => "good bye";
      const actual = gatherInput("hello");
      expect(actual).toEqual("good bye");
    });
    it('when the user clicks "ok" on the second try', () => {
      let calls = 0;
      window.prompt = () => (calls++ >= 2 ? "good bye" : null);
      const actual = gatherInput("hello");
      expect(actual).toEqual("good bye");
    });
    it('when the user clicks "ok" on the 6th try', () => {
      let calls = 0;
      window.prompt = () => (calls++ >= 6 ? "good bye" : null);
      const actual = gatherInput("hello");
      expect(actual).toEqual("good bye");
    });
  });
});
