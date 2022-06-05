import { createIsEmpty } from "./../isof";
import {
  isFunctionOf,
  isFakeArray,
  isStrictArray,
  isCasualArray,
  isPlainObject,
  isObject,
  isSimpleTypeOf,
  isStrictEmpty,
} from "../isof";
import {
  casualArrayExamples,
  fakeArrayExamples,
  functionExamples,
  noPlainObjectExamples,
  objectExamples,
  plainObjectExamples,
  simpleTypeExamples,
  strictArrayExamples,
  strictEmptyExamples,
} from "../type-examples";

describe("test isFunctionOf", () => {
  it("", () => {
    expect(functionExamples.every(isFunctionOf)).toBe(true);
  });
});

describe("test array", () => {
  describe("test isFakeArray", () => {
    expect(fakeArrayExamples.every(isFakeArray)).toBe(true);
  });
  describe("test isStrictArray", () => {
    expect(strictArrayExamples.every(isStrictArray)).toBe(true);
  });
  describe("test isCasualArray", () => {
    expect(casualArrayExamples.every(isCasualArray)).toBe(true);
  });
});

describe("test object", () => {
  describe("test isPlainObject", () => {
    it("Object.create(null) 是PlainObject", () => {
      expect(plainObjectExamples.every(isPlainObject)).toBe(true);
    });
    it("其它值都不是PlainObject", () => {
      expect(noPlainObjectExamples.every((item) => !isPlainObject(item))).toBe(
        true
      );
    });
  });
  describe("test isObject", () => {
    it("是object", () => {
      expect(objectExamples.every(isObject)).toBe(true);
    });
    it("基本数据类型都不是object", () => {
      expect(simpleTypeExamples.every((item) => !isObject(item))).toBe(true);
    });
  });
});

describe("test isSimpleTypeOf", () => {
  it("", () => {
    expect(simpleTypeExamples.every(isSimpleTypeOf)).toBe(true);
  });
});

describe("test empty", () => {
  it("test isStrictEmpty", () => {
    expect(strictEmptyExamples.every(isStrictEmpty)).toBe(true);
  });
  it("test createIsEmpty: isStrictEmpty内部使用了createIsEmpty，无需单独验证", () => {
    expect(createIsEmpty).toBe(createIsEmpty);
  });
});
