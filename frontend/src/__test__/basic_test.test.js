import { describe, it, expect } from "vitest";
import { add } from "../utils/add";

describe("add function", () => {
 it("should return 3 when adding 1 and 2", () => {
   expect(add(1, 2)).toBe(3);
 });
 it("should return 5 when adding 2 and 3", () => {
   expect(add(2, 3)).toBe(5);
 });
});