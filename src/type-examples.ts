export const numberExamples = [-1, 0, 1, BigInt("100"), Infinity];

export const symbolExamples = [Symbol(1), Symbol.for("")];

export const stringExamples = ["", "\n", "\t", "\r", "hello", "哈哈哈", "😊"];

export const simpleTypeExamples = [
  null,
  undefined,
  false,
  true,
  ...numberExamples,
  ...stringExamples,
  ...symbolExamples,
];

export const functionExamples = [
  () => {},
  function () {},
  function sayHello() {},
  new Function("() => {}"),
  eval("() => {}"),
];

export const plainObjectExamples = [Object.create(null)];

export const fakeArrayExamples = [{ 0: "0", 1: "1", 2: "2", length: 3 }];

export const strictArrayExamples = [[], [1, 2, 3], Array(1)];

export const casualArrayExamples = [
  ...fakeArrayExamples,
  ...strictArrayExamples,
];

export const noPlainObjectExamples = [
  Object.create({}),
  new Date(),
  new ArrayBuffer(1),
  ...casualArrayExamples,
  ...functionExamples,
];

export const objectExamples = [
  ...plainObjectExamples,
  ...noPlainObjectExamples,
];

export const typeExamples = [
  ...simpleTypeExamples,
  ...casualArrayExamples,
  ...functionExamples,
  ...objectExamples,
];

/** 与??运算符相同，只有undefined和null */
export const baseEmptyExamples = [undefined, null];

export const strictEmptyExamples = [
  ...baseEmptyExamples,
  false,
  0,
  [],
  "",
  " ",
  "\n\t\r",
  Object.create(null),
];
