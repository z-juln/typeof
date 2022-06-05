import { julnTypeof } from "..";
import { expectNotType, expectType } from "tsd";
import type { Type } from "../types";

describe("julnTypeof", () => {
  describe("test script", () => {
    it("check null", () => {
      expect(julnTypeof(null)).toBe("null");
    });
    it("check string", () => {
      expect(julnTypeof("null")).toBe("string");
      expect(julnTypeof("")).toBe("string");
    });
    it("check array", () => {
      expect(julnTypeof([])).toBe("array");
      expect(julnTypeof(new Array([1, 2, 3]))).toBe("array");
    });
    it("check native class", () => {
      expect(julnTypeof(new ArrayBuffer(1))).toBe("arraybuffer");
    });
    it("check custom class", () => {
      class Person {}
      expect(julnTypeof(new Person())).toBe("person");
    });
  });

  describe("test type", () => {
    it("泛型不传，提示类型为 Type", () => {
      expectType<Type>(julnTypeof(""));
    });
    it("泛型传0，提示类型为 string", () => {
      expectType<string>(julnTypeof<0>(""));
      expectNotType<Type>(julnTypeof<0>(""));
    });
    it("泛型传1，提示类型为 Type", () => {
      expectType<Type>(julnTypeof<1>(""));
    });
    it("泛型传只读字符串类型，如'Person'，提示类型为 Type | 'person'", () => {
      expectType<Type | "person">(julnTypeof<"Person">(""));
    });
  });
});
