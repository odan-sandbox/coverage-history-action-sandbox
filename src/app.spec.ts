import { add, mul } from "./app";

describe("app", (): void => {
  describe("add", (): void => {
    it("should be correct", (): void => {
      expect(add(32, 10)).toBe(42);
    });
  });
  describe("mul", (): void => {
    it("should be correct", (): void => {
      expect(mul(32, 10)).toBe(320);
    });
  });
});
