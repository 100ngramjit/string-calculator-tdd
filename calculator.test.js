const { add } = require("./calculator");

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("should handle any amount of numbers", () => {
    expect(
      add("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,101")
    ).toBe(401);
  });

  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should throw an exception for negative numbers", () => {
    expect(() => add("-1,2")).toThrow("negative numbers not allowed -1");
  });

  test("should throw an exception with all negative numbers", () => {
    expect(() => add("2,-4,3,-5")).toThrow(
      "negative numbers not allowed -4,-5"
    );
  });

  test("should ignore numbers bigger than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("2,1000,5")).toBe(1007);
  });
});
