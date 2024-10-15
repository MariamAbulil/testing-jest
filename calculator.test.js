const calc = require("./calculator");
describe("calculator", () => {
  describe("+ operator", () => {
    test("1+2 return 3", () => {
      expect(calc(1, "+", 2)).toBe(3);
    });
  });
  describe("- operator", () => {
    test("4-2 return 2", () => {
      expect(calc(4, "-", 2)).toBe(2);
    });
    it("should handle negative numbers correctly", () => {
      expect(calc(-8, "+", 5)).toBe(-3);
    });
    it("should throw an error for invalid input types", () => {
      expect(() => calc("2", "+", 3)).toThrowError("Invalid input type");
    });
  });
  describe("* operator", () => {
    test("4*2 return 8", () => {
      expect(calc(4, "*", 2)).toBe(8);
    });
    it("should handle decimal numbers correctly", () => {
      expect(calc(3.5, "*", 2)).toBe(7);
    });
  });
  describe("/ operator", () => {
    test("4/2 return 2", () => {
      expect(calc(4, "/", 2)).toBe(2);
    });
    test("any number / zero return error", () => {
      expect(() => calc(4, "/", 0)).toThrowError("error");
    });
  });
  describe("invalid operator", () => {
    test("this % is invalid operator ", () => {
      expect(() => calc(1, "%", 2)).toThrowError("Invalid operator");
    });
  });
  describe("additional cases", () => {
    test("should ignore numbers greater than 1000", () => {
      expect(calc(1000, "+", 1001)).toBe(1000);
    });
  });
});
