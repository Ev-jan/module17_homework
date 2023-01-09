import { revertString } from "../../utils/revertString.js";

describe("tests for revertString function", () => {
  it("should be able to handle incorrect input", () => expect(revertString(" ")).toBe("incorrect input, enter a valid string"));
  it("should be able to handle incorrect input", () => expect(revertString(185)).toBe("incorrect input, enter a valid string"));
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});