// Write your tests here!
// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "Why not learn to code";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const message = "Wes loves zebras";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "Wes does not love spiders";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "a mage a sage";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d pdjh d vdjh";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "a mage, a sage!";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d pdjh, d vdjh!";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "A MaGe a SaGe";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d pdjh d vdjh";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "amazing zebra";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "dpdclqj cheud";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "amazing zebra";
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = "xjxwfkd wbyox";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "d pdjh d vdjh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a mage a sage";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "d pdjh, d vdjh!";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a mage, a sage!";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "D pdjh d VdJh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a mage a sage";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "dpdclqj cheud";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "amazing zebra";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "xjxwfkd wbyox";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "amazing zebra";

      expect(actual).to.equal(expected);
    });
  });
});
