// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "notzebrasagain";
      const actual = polybius(message);
      const expected = "3343445551212411341122114233";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "jingle";
      const actual = polybius(message);
      const expected = "424233221351";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "elon musk fans only";
      const actual = polybius(message);
      const expected = "51134333 23543452 12113334 43331345";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "51134333 23543452 12113334 43331345";
      const actual = polybius(message, false);
      const expected = "elon musk fans only";
      
      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "424233221351";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "2345 23513434112251";
      const actual = polybius(message, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "51134333 2354345";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
