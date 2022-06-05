import julnTypeof from "./typeof";
import { simpleTypes } from "./types";

export const isFunctionOf = (value: any) => julnTypeof(value) === "function";

export const isFakeArray = (value: any) =>
  typeof value?.length === "number" && value?.length >= 0;

export const isStrictArray = Array.isArray;

export const isCasualArray = (value: any) =>
  Array.isArray(value) || isFakeArray(value);

export const isSimpleTypeOf = (value: any) =>
  simpleTypes.includes(julnTypeof(value) as any);

/** 判断是否为 Object.create(null) 的结果 */
export const isPlainObject = (value: any) => !value.__proto__;

export const isObject = (value: any) => !isSimpleTypeOf(value);

export const createIsEmpty =
  (options: any[] = []) =>
  (value: any) => {
    const emptyFromOptions = options.filter((opt) => !isFunctionOf(opt));
    const checkFromOptions = options.filter((opt) => isFunctionOf(opt));
    const isEmpty =
      [null, undefined, ...emptyFromOptions].includes(value) ||
      checkFromOptions.some((check) => check(value));
    return isEmpty;
  };

export const isStrictEmpty = createIsEmpty([
  false,
  0,
  "",
  (value: any) => isStrictArray(value) && value.length === 0,
  (value: any) => typeof value === "string" && /^\s*$/.test(value),
  isPlainObject,
]);
